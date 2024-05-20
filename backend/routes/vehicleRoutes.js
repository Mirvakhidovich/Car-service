const express = require('express');
const vehicleController = require("../controllers/vehicleController");
const userController = require("../controllers/userController");
const router = express.Router();

/* GET users listing. */
router.route('/')
	.get(userController.protect, vehicleController.getAllVehicles)
	.post(userController.protect, vehicleController.addVehicle)

router.route('/:id')
	.delete(userController.protect, vehicleController.removeVehicle)

module.exports = router;
