const catchAsync = require("../utils/catchAsync");
const Record = require("../models/recordModel");
const Vehicle = require("../models/vehicleMode");

exports.getAllRecords = catchAsync(async (req, res) => {
  console.log(req.user.id)
  const records = await Record.find({ user: req.user.id }).populate("vehicle");

  res.status(200).json({
    status: "success",
    data: records,
  });
});

exports.newRecord = catchAsync(async (req, res) => {
  const input = {
    serviceType: req.body.serviceType,
    vehicle: req.body.vehicle,
    location: req.body.location,
    serviceDate: req.body.serviceDate,
    user: req.user.id,
    amount: req.body.amount,
    paymentMethod: req.body.paymentMethod,
    pickUpTime: req.body.pickUpTime,
  };

  const record = await Record.create(input);

  res.status(200).json({
    status: "success",
    data: record,
  });
});

exports.removeRecord = catchAsync(async (req, res) => {
  await Record.findByIdAndDelete(req.params.id)

  res.status(204).json({
    status: 'success',
    data: null
  })
})