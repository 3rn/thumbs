var Models = require('../../db/schema.js');

var getMultipleChoice = (req, res) => {
  console.log('MultipleChoice Controller: getting MultipleChoice');
  Models.connection.query(
    `SQL`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

var postMultipleChoice = (req, res) => {
  console.log('MultipleChoice Controller: posting MultipleChoice');
  Models.SavedQuestions.build({

  }).save();
};

module.exports = {
  get: getMultipleChoice,
  post: postMultipleChoice
};
