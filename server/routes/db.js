const router = require('express').Router();

// V0
const savedQuestions = require('../../db/tables/savedQuestions/savedQuestionRoutes.js');

// V0
router.use('/savedQuestions', savedQuestions);

// V1
const defineRoute = function(model) {
  return require(`../../db/tables/${model}/${model}Routes.js`);
};

// V1
router.use('/u', defineRoute('User'));
router.use('/c', defineRoute('Code'));
router.use('/l', defineRoute('Lecture'));
router.use('/d', defineRoute('Delivery'));
router.use('/q', defineRoute('Question'));
router.use('/r', defineRoute('Response'));
router.use('/s', defineRoute('Slide'));

module.exports = router;
