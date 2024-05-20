const catchAsync = require('../utils/catchAsync')
const Vehicle = require("../models/vehicleMode");

exports.getAllVehicles = catchAsync(async (req, res) => {
	const vehicles = await Vehicle.find({ user: req.user.id });

	res.status(200).json({
		status: "success",
		data: vehicles,
	});
});


exports.addVehicle = catchAsync(async (req, res) => {
	const input = {
		make: req.body.make,
		model: req.body.model,
		year: req.body.year,
		color: req.body.color,
		licensePlate: req.body.licensePlate,
		user: req.user.id
	}

	const vehicle = await Vehicle.create(input);

	res.status(201).json({
		status: 'success',
		data: vehicle
	})
})

exports.removeVehicle = catchAsync(async (req, res) => {
	await Vehicle.findByIdAndDelete(req.params.id)

	res.status(204).json({
		status: 'success',
		data: null
	})
})