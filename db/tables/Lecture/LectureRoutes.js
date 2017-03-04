const router = require('express').Router();
const Lecture = require('./LectureController.js');

router.route('/')
  .get(Lecture.getAllLectures)
  .post(Lecture.post);


router.route('/:lectureId')
  .get(Lecture.getLectureById)

module.exports = router;
