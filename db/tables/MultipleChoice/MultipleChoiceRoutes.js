const router = require('express').Router();
const MultipleChoice = require('./MultipleChoiceController.js');

router.route('/:questionId')
  .get(MultipleChoice.get)
  .post(MultipleChoice.post);

module.exports = router;
