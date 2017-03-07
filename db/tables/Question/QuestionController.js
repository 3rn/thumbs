var Models = require('../../schema.js');

var getQuestion = (req, res) => {
  console.log('Question Controller: getting question');
  Models.connection.query(
    `SQL`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
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
  get: getQuestion,
  post: postQuestion
};
