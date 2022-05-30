const express = require('express');
const authController = require('../controllers/auth.controller')
const adminController = require('../controllers/admin.controllers')
const productController = require('../controllers/product.controller')
const categoryController = require('../controllers/category.controller')
const upload = require('../middlewares/upload.middleware')
const router = express.Router();

router.
route('/').
get(adminController.homePage)

// router.
// route('/images/:id').
// get(adminController.getProductImagesById)
// post(adminController.createProductImages).
// put(adminController.updateProductImagesById).
// get(adminController.delProductImageById)

router.
route('/cpro').
get(adminController.createProducts).
post(upload.single('pro_img'), productController.createProduct)

router.
route('/upro/:id').
get(adminController.getProductsById).
patch(upload.single('pro_img'), adminController.updateProductsById)

router.route('/ucat/:id').
get(adminController.getCategoryById).
put(upload.single('cat_img'), adminController.updateCategoryById)


router.
route('/ccat').
get(adminController.createCat).
post(upload.single('cat_img'), categoryController.createCategory)

router.
route('/vcat').
get(adminController.viewCat)

router.
route('/vpro').
get(adminController.viewPro)

router.
route('/dspro/:id').
get(adminController.delSingleProduct)

router.
route('/vspro/:id').
get(adminController.viewSingleProduct)

module.exports = router