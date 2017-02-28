const router = require('express').Router();
const Response = require('./ResponseController.js');

router.route('/')
  .get(Response.get)
  .post(Response.post);

module.exports = router;
