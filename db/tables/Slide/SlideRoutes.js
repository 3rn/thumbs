const router = require('express').Router();
const Slide = require('./SlideController.js');


router.route('/:slideLink')
  .get(Slide.getSlide)
  .post(Slide.postSlideLink)
  .delete(Slide.deleteSlideLink);


module.exports = router;
