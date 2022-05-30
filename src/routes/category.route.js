const express = require('express');
const categoryController = require('../controllers/category.controller')
const router = express.Router();

router.
route('/').
get(categoryController.getAllCategory).
post(categoryController.createCategory)



//get All Caategories with its Products
router.
route('/p').
get(categoryController.allcategoryp)

router.
route('/:id').
get(categoryController.getCategoryById).
put(categoryController.updateCategoryById)
    //Get all Products against given Category ID
router.
route('/:id/products').
get(categoryController.categoryByIdp)


module.exports = router