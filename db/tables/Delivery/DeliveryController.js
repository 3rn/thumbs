const Models = require('../../schema.js');

const getDelivery = (req, res) => {
  console.log('DeliveryController: Getting Delivery');
  Models.connection.query(
    // `SQL Queury`
    `SELECT *,
      CASE
        WHEN EXTRACT(EPOCH FROM  current_timestamp - created_at) < 60
          THEN 'Just Created'
        WHEN EXTRACT(EPOCH FROM  current_timestamp - created_at) < 3600
          THEN FLOOR(EXTRACT(EPOCH FROM  current_timestamp - created_at) / 60) || ' minute(s) ago'
        WHEN EXTRACT(EPOCH FROM  current_timestamp - created_at) < 86400
         THEN FLOOR(EXTRACT(EPOCH FROM  current_timestamp - created_at) / 3600) || ' hour(s) ago'
        ELSE FLOOR(EXTRACT(EPOCH FROM  current_timestamp - created_at) / 86400) || ' day(s) ago'
      END AS time_diff

      FROM deliveries
      ORDER BY updated_at DESC;
    `,
    { type: Models.connection.QueryTypes.SELECT },
  ).then((data) => {
    res.send(data);
  });
};

const getDeliveryLectureTitle = (req, res) => {
  console.log('DeliveryController: Getting Delivery Lecture Title');
  Models.connection.query(
    // `SQL Queury`
    { type: Models.connection.QueryTypes.SELECT },
  ).then((data) => {
    res.send(data);
  });
};

const postDelivery = (req, res) => {
  console.log('DeliveryController: Creating Delivery');
  Models.Delivery.build({
    lecture_id: req.body.lectureId,
    user_id: req.body.userId,
    room: req.body.room,
  }).save()
    .then((result) => {
      res.send(result.dataValues);
    });
};

module.exports = {
  get: getDelivery,
  post: postDelivery,
};
