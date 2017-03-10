var Models = require('../../schema.js');

var getQuestions = (req, res) => {
  Models.connection.query(
    `SELECT * FROM questions
     WHERE lecture_id = ${req.params.lectureId}`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(questions) {
    res.send(questions);
  });
};

var postQuestion = (req, res) => {
  Models.Question.build({
    'title': req.body.title,
    'lecture_id': req.body.lectureId,
    'question_type': req.body.questionType,
    'graph_type': req.body.graphType
  })
  .save()
  .then((question) => {
    res.send(question.dataValues);
  });
};

module.exports = {
  getQuestions: getQuestions,
  postQuestion: postQuestion
};
