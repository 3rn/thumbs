var Models = require('../../schema.js');


var getAllLectures = (req, res) => {
  console.log('LectureController: Getting Lectures');
  Models.connection.query(
    // `SQL Queury`
    `SELECT * FROM lectures`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
}

var getLectureById = (req, res) => {
  console.log('LectureController: Getting Lectures');
  console.log(req);
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
  console.log(req);
  Models.connection.query(
    // `SQL Queury`
    `SELECT * FROM deliveries
     WHERE deliveries.lecture_id = ${req.params.lectureId}`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
}

var postLecture = (req, res) => {
  console.log('LectureController: Creating Lecture');
  console.log('title ', req.body.title);
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