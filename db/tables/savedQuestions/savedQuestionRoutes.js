const router = require('express').Router();
const savedQuestions = require('./savedQuestionController.js');

router.route('/getQuestions/:presentationCode')
  .get(savedQuestions.getQuestions)
  .post(savedQuestions.postQuestions);

router.route('/getRooms').get(savedQuestions.getRooms);

module.exports = router;
