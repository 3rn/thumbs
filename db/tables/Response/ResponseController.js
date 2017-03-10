var Models = require('../../schema.js');

var getResponse = (req, res) => {
  console.log('Response Controller: getting Response');
  Models.connection.query(
    `SELECT * FROM responses
      WHERE delivery_id = ${req.params.deliveryId} AND question_id = ${req.params.questionId};
    `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    console.log('DATA', data);
    res.send(data);
  });
};

var postResponse = (req, res) => {
  console.log('Response Controller: posting Response');
  Models.Response.build({

  }).save();
};

module.exports = {
  get: getResponse,
  post: postResponse
};
