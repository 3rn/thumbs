const Models = require('../../schema.js');

const getQuestions = (req, res) => {
  Models.connection.query(
    `SELECT * FROM questions
     WHERE lecture_id = ${req.params.lectureId}`,
    { type: Models.connection.QueryTypes.SELECT },
  ).then((questions) => {
    res.send(questions);
  });
};

const postQuestion = (req, res) => {
  Models.Question.build({
    title: req.body.title,
    lecture_id: req.body.lectureId,
    question_type: req.body.questionType,
    question_choices: req.body.questionChoices,
  })
    .save()
    .then((question) => {
      res.send(question.dataValues);
    });
};

module.exports = {
  getQuestions: getQuestions,
  postQuestion: postQuestion,
};
