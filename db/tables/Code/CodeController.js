const Models = require('../../schema.js');

const getCode = (req, res) => {
  console.log('CodeController: Getting Code');
  Models.connection.query(
    `SELECT * FROM codes
     WHERE code = '${req.params.code}'`,
    { type: Models.connection.QueryTypes.SELECT },
  ).then((data) => {
    res.send(data);
  });
};

const postCode = (req) => {
  console.log('CodeController: Creating Code');
  Models.SavedQuestions.build({
    code: req.body.code,
    user_id: req.body.userId,
  }).save();
};

module.exports = {
  get: getCode,
  post: postCode,
};
