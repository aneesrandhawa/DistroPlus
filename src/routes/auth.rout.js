const express = require('express');
const authController = require('../controllers/auth.controller')
const router = express.Router();
router.
route('/').
get(authController.page)
router.
route('/logout').
get(authController.logout)
router.
route('/register').
post(authController.registerUser).
get()
router.
route('/login').
post(authController.login)
module.exports = router