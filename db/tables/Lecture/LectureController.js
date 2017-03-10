var Models = require('../../schema.js');


var getAllLectures = (req, res) => {
  console.log('LectureController: Getting Lectures');
  Models.connection.query(
    // `SQL Queury`
    `SELECT * FROM lectures
      ORDER BY updated_at DESC;
    `
    ,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
}

var getLectureById = (req, res) => {
  console.log('LectureController: Getting Lectures');
  Models.connection.query(
    // `SQL Queury`
    `SELECT * FROM lectures
     WHERE lectures.id = ${req.params.lectureId}`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
}

var getDeliveries = (req, res) => {
  console.log('LectureController: Getting deliveries');
  Models.connection.query(
    // `SQL Queury`
    `SELECT * FROM deliveries
     WHERE deliveries.lecture_id = ${req.params.lectureId}
     ORDER BY updated_at DESC;
     `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
}

var postLecture = (req, res) => {
  console.log('LectureController: Creating Lecture');
  Models.Lecture.build({
    'title': req.body.title

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
