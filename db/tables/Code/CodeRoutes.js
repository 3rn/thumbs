const router = require('express').Router();
const Code = require('./CodeController.js');

router.route('/:code')
  .get(Code.get)
  .post(Code.post);

module.exports = router;
