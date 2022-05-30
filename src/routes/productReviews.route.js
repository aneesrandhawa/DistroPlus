const express = require('express');
const productReviewsController = require('../controllers/productReviews.controller')
const router = express.Router();
router.
route('/').
get(productReviewsController.getAllProductsReviews).
post(productReviewsController.createProductReviews)
router.
route('/:id').
get(productReviewsController.getProductReviewsById).
put(productReviewsController.updateProductReviewsById)
module.exports = router