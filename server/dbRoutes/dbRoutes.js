const router = require('express').Router();

// V0
const savedQuestions = require('./savedQuestions/savedQuestionRoutes.js');

// V1
const User = require('./User/UserRoutes.js');
const Code = require('./Code/CodeRoutes.js');
const Lecture = require('./Lecture/LectureRoutes.js');
const Delivery = require('./Delivery/DeliveryRoutes.js');
const Question = require('./Question/QuestionRoutes.js');
const QuestionType = require('./QuestionType/QuestionTypeRoutes.js');
const MultipleChoice = require('./MultipleChoice/MultipleChoiceRoutes.js');
const Response = require('./Response/ResponseRoutes.js');


// V0
router.use('/savedQuestions', savedQuestions);

// V1
router.use('/u', User);
router.use('/c', Code);
router.use('/l', Lecture);
router.use('/d', Delivery);
router.use('/q', Question);
router.use('/qt', QuestionType);
router.use('/mc', MultipleChoice);
router.use('/r', Response);



module.exports = router;
