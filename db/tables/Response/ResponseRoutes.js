const router = require('express').Router();
const Response = require('./ResponseController.js');

router.route('/:deliveryId/:questionId')
  .get(Response.get)
  .post(Response.post);

module.exports = router;
