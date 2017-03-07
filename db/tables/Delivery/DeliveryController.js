var Models = require('../../schema.js');

var getDelivery = (req, res) => {
  console.log('DeliveryController: Getting Delivery');
  Models.connection.query(
    // `SQL Queury`
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

var getDeliveryLectureTitle = (req, res) => {
  console.log('DeliveryController: Getting Delivery Lecture Title');
  Models.connection.query(
    // `SQL Queury`
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

var postDelivery = (req, res) => {
  console.log('DeliveryController: Creating Delivery');
  Models.Delivery.build({
    'lecture_id': req.body.lectureId,
    'user_id': req.body.userId
  }).save()
  .then(result => {
    res.send(result.dataValues);
  });
};

module.exports = {
  'get': getDelivery,
  'post': postDelivery
};
