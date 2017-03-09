var Models = require('../../schema.js');

var getQuestions = (req, res) => {
  console.log('Question Controller: getting question');
  console.log(req.params);
  Models.connection.query(
    `SELECT * FROM questions
     WHERE lecture_id = ${req.params.lectureId}`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(questions) {
    var type = ['YES_NO', 'THUMBS', 'MULTIPLE_CHOICE', 'SCALE', 'OPEN_RESPONSE'];
    for (var i = 0; i < questions.length; i++) {
      questions[i].questionType = type[questions[i].question_type_id];
    }
    res.send(questions);
  });
};

var postQuestion = (req, res) => {
  console.log('Question Controller: posting question');
  console.log('title ', req.body.title);
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
