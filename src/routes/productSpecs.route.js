const express = require('express');
const productSpecsController = require('../controllers/productSpecs.controller')
const router = express.Router();
router.
route('/').
get(productSpecsController.getAllSpecs).
post(productSpecsController.createSpecs)
router.
route('/:id').
get(productSpecsController.getSpecsById).
put(productSpecsController.updateSpecsById)
module.exports = router