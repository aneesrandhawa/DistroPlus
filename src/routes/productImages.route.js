const express = require('express');
const productImagesController = require('../controllers/productImages.controller')
const router = express.Router();
router.
route('/').
get(productImagesController.getAllProductsImages).
post(productImagesController.createProductImages)
router.
route('/:id').
get(productImagesController.getProductImagesById).
put(productImagesController.updateProductImagesById)
module.exports = router