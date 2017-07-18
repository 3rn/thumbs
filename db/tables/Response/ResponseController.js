const Models = require('../../schema.js');

const getResponse = (req, res) => {
  console.log('Response Controller: getting Response');
  Models.connection.query(
    `SELECT * FROM responses
      WHERE delivery_id = ${req.params.deliveryId} AND question_id = ${req.params.questionId}
      ORDER BY created_at DESC
      LIMIT 1;
    `,
    { type: Models.connection.QueryTypes.SELECT },
  ).then((data) => {
    res.send(data);
  });
};

const postResponse = (req, res) => {
  console.log('Response Controller: posting Response');
  Models.Response.build({
    value: req.body.value,
    delivery_id: req.params.deliveryId,
    question_id: req.params.questionId,
  }).save()
    .then((response) => {
      res.send(response.dataValues);
    });
};

module.exports = {
  get: getResponse,
  post: postResponse,
};
