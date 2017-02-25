const router = require('express').Router();

const questions = require('./savedQuestions/savedQuestionRoutes.js');

router.use('/savedQuestions', questions);

module.exports = router;
