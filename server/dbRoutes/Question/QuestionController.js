var Models = require('../../db/schema.js');

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
  Models.SavedQuestions.build({
    'presentation_code': req.body.presentationCode,
    'title': req.body.title,
    'question_type': req.body.questionType,
    'graph_type': req.body.graphType,
    'content': req.body.content
  }).save();
};

module.exports = {
  get: getQuestion,
  post: postQuestion
};
