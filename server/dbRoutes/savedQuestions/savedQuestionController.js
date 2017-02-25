var Models = require('../../db/schema.js');

exports.getQuestions = (req, res) => {
  Models.connection.query(
    `SELECT
      *
    FROM
      saved_questions AS sq
    WHERE
      presentation_code = '${req.params.presentationCode}'`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

exports.postQuestions = (req, res) => {
  Models.SavedQuestions.build({
    'presentation_code': '',
    'title': '',
    'question_type': '',
    'graph_type': '',
    'content': ''
  }).save();
};

exports.getRooms = (req, res) => {
  Models.connection.query(
    `SELECT
      DISTINCT presentation_code
    FROM
      saved_questions AS sq`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};
