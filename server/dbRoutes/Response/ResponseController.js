var Models = require('../../db/schema.js');

var getResponse = (req, res) => {
  console.log('Response Controller: getting Response');
  Models.connection.query(
    `SQL`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

var postResponse = (req, res) => {
  console.log('Response Controller: posting Response');
  Models.SavedQuestions.build({

  }).save();
};

module.exports = {
  get: getResponse,
  post: postResponse
};
