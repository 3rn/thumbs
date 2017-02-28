const router = require('express').Router();
const MultipleChoice = require('./MultipleChoiceController.js');

router.route('/')
  .get(MultipleChoice.get)
  .post(MultipleChoice.post);

module.exports = router;
