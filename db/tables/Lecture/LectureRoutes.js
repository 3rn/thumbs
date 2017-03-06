const router = require('express').Router();
const Lecture = require('./LectureController.js');

router.route('/')
  .get(Lecture.getAllLectures)
  .post(Lecture.post);


router.route('/:lectureId')
  .get(Lecture.getLectureById)

router.route('/:lectureId/d')
  .get(Lecture.getDeliveries)  

module.exports = router;
