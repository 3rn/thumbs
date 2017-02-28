var Models = require('../../db/schema.js');

var getQuestionType = (req, res) => {
  console.log('QuestionType Controller: getting questionType');
  Models.connection.query(
    `SQL`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

var postQuestionType = (req, res) => {
  console.log('QuestionType Controller: posting questionType');
  Models.SavedQuestions.build({
    
  }).save();
};

module.exports = {
  get: getQuestionType,
  post: postQuestionType
};
