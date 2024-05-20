const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const recordSchema = new Schema(
  {
    serviceType: {
      type: String,
      enum: {
        values: [
          "repair-job",
          "tires-wheels-care",
          "battery-change",
          "ac",
          "oil-change",
          "car-wash",
          "car-painting",
          "car-insurance",
          "tune-up-service",
        ],
        message: "Please select a service type",
      },
      required: [true, "Please select a service type"],
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: [true, "Please select a vehicle model"],
    },
    location: {
      type: String,
      required: [true, "Please provide a location"],
    },
    serviceDate: {
      type: String,
      required: [true, "Please provide a service date"],
    },
    pickUpTime: {
      type: String,
      required: [true, "Please provide pick up time"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please specify the user"],
    },
    paymentMethod: {
      type: String,
      enum: {
        values: ["card", "paypal", "visa", "click"],
        message: "Please select a payment method",
      },
      required: [true, "Please select a payment method"],
    },
    amount: {
      type: Number,
      required: [true, "Please provide the amount"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Record = new mongoose.model("Record", recordSchema);

module.exports = Record;
