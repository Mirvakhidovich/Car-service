const express = require('express');
const userController = require("../controllers/userController");
const router = express.Router();

/* GET users listing. */
router.get('/isLoggedIn', userController.isLoggedIn);
router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.post('/logout', userController.logout);

module.exports = router;
