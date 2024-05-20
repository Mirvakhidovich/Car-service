const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController')
const userController = require('../controllers/userController')

router.get('/users', userController.protect, userController.restrictTo('admin'), adminController.getAllUsers);

router.get('/vehicles', userController.protect, userController.restrictTo('admin'), adminController.getAllVehicles);

router.get('/records', userController.protect, userController.restrictTo('admin'), adminController.getAllRecords);
router.delete('/records/:id', userController.protect, userController.restrictTo('admin'), adminController.deleteRecord);

module.exports = router;