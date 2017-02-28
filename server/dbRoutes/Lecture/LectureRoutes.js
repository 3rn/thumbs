const router = require('express').Router();
const Lecture = require('./LectureController.js');

router.route('/')
  .get(Lecture.get)
  .post(Lecture.post);


module.exports = router;
