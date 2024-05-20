const User = require("../models/userModel");
const Record = require("../models/recordModel");
const Vehicle = require("../models/vehicleMode");
const catchAsync = require("../utils/catchAsync");

// Users
exports.getAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.find();

	res.status(200).json({
		status: "success",
		data: users
	})
})

// Vehicles
exports.getAllVehicles = catchAsync(async (req, res, next) => {
	const vehicles = await Vehicle.find();

	res.status(200).json({
		status: "success",
		data: vehicles
	})
})

// Records
exports.getAllRecords = catchAsync(async (req, res, next) => {
	const records = await Record.find();

	res.status(200).json({
		status: "success",
		data: records
	})
})

exports.deleteRecord = catchAsync(async (req, res, next) => {
	await Record.findByIdAndDelete(req.params.id);

	res.status(204).json({
		status: "success"
	})
})