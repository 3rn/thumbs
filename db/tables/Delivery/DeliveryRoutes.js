const router = require('express').Router();
const Delivery = require('./DeliveryController.js');

router.route('/:deliveryId')
  .get(Delivery.get)
  .post(Delivery.post);


module.exports = router;
