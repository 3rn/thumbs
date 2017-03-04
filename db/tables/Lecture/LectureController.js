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


var postLecture = (req, res) => {
  console.log('LectureController: Creating Lecture');
  Models.SavedQuestions.build({
    
  }).save();
};


module.exports = {
  'getAllLectures': getAllLectures,
  'getLectureById': getLectureById,
  'post': postLecture
}