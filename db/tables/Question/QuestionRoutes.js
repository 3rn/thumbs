const router = require('express').Router();
const Question = require('./QuestionController.js');

router.route('/')
  .get(Question.get)
  .post(Question.post);

module.exports = router;
