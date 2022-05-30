const express = require('express');
const categoryController = require('../controllers/category.controller')
const authController = require('../controllers/auth.controller')
const productController = require('../controllers/product.controller')

const router = express.Router();
router
    .route('/')
    .get(categoryController.allcategoryp)
router
    .route('/:id/products')
    .get(categoryController.categoryByIdp)
module.exports = router