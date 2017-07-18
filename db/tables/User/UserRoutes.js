const router = require('express').Router();
const User = require('./UserController.js');

router.route('/')
  .get(User.get)
  .post(User.post);

module.exports = router;
