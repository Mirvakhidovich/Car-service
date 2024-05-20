const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const data = {
	"make": "Toyota",
	"model": "Corolla",
	"year": "2021",
	"color": "Red",
	"licensePlate": "123456"
}

const vehicleSchema = new Schema({
	make: {
		type: String,
		required: [true, 'Please provide manufacturer']
	},
	model: {
		type: String,
		required: [true, 'Please provide model']
	},
	year: {
		type: Number,
		required: [true, 'Please provide year']
	},
	color: {
		type: String,
		required: [true, 'Please provide color']
	},
	licensePlate: {
		type: String,
		required: [true, 'Please provide license plate number'],
		validate: {
			validator: function(val) {
				return val.length === 5
			},
			message: 'License plate must include 5 numbers'
		}
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Please provide user id']
	}
},   {
	toJSON: { virtuals: true },
	toObject: { virtuals: true },
})

const Vehicle = new mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;