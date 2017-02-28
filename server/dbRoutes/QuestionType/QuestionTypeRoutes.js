const router = require('express').Router();
const QuestionType = require('./QuestionTypeController.js');

router.route('/')
  .get(QuestionType.get)
  .post(QuestionType.post);

module.exports = router;
