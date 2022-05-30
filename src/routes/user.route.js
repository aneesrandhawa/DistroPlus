const express = require('express');
const userController = require('../controllers/user.controller')
const router = express.Router();
router.
route('/').
get(userController.getAllUser).
post(userController.createUser)
router.
route('/:id').
get(userController.getUserById).
put(userController.updateUserById)
module.exports = router