const express = require('express');
const productController = require('../controllers/product.controller')
const router = express.Router();
router.
route('/').
get(productController.getAllProducts).
post(productController.createProduct)
router.
route('/:id').
get(productController.getProductById).
put(productController.updateProductById)


module.exports = router

// you have to crate following routes
//Route for find Category against a product
//Route for find Orders against a product
//Route for find default image of a product