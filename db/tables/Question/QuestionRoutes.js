const router = require('express').Router();
const Question = require('./QuestionController.js');

router.route('/:lectureId')
  .get(Question.getQuestions)
  .post(Question.postQuestion);

module.exports = router;
