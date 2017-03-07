const router = require('express').Router();
const Delivery = require('./DeliveryController.js');

router.route('/')
  .post(Delivery.post);

router.route('/:deliveryId')
  .get(Delivery.get);

module.exports = router;
