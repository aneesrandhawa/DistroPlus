const express = require('express');
const orderDetailController = require('../controllers/orderDetail.controller')
const router = express.Router();
router.
route('/').
get(orderDetailController.getAllOrderDetail).
post(orderDetailController.createOrderDetail)
router.
route('/:id').
get(orderDetailController.getOrderDetailById).
put(orderDetailController.updateOrderDetailById)
module.exports = router