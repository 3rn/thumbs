const router = require('express').Router();
const Delivery = require('./DeliveryController.js');

router.route('/')
  .get(Delivery.get)
  .post(Delivery.post);


module.exports = router;
