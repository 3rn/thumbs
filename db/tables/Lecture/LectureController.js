var Models = require('../../schema.js');


var getLecture = (req, res) => {
  console.log('LectureController: Getting Lecture');
  Models.connection.query(
    // `SQL Queury`
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
  'get': getLecture,
  'post': postLecture
}