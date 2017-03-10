var Models = require('../../schema.js');


var getAllLectures = (req, res) => {
  console.log('LectureController: Getting Lectures');
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
    FROM lectures
      ORDER BY id DESC;
    `
    ,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};


var getLectureById = (req, res) => {
  console.log('LectureController: Getting Lectures');
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
     FROM lectures
     WHERE lectures.id = ${req.params.lectureId}
     ORDER BY id DESC;
     `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

var getDeliveries = (req, res) => {
  console.log('LectureController: Getting deliveries');
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
     WHERE deliveries.lecture_id = ${req.params.lectureId}
     ORDER BY id DESC;
     `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

var postLecture = (req, res) => {
  console.log('LectureController: Creating Lecture');
  Models.Lecture.build({
    'title': req.body.title,
    'slide_url': req.body.slide_url
  }).save()
  .then((lecture) => {
    console.log('done saving ', res);
    res.send(lecture.dataValues);
  });


};


module.exports = {
  'getAllLectures': getAllLectures,
  'getLectureById': getLectureById,
  'getDeliveries': getDeliveries,
  'post': postLecture
}
