const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const userSchema = new Schema({
	username: {
		type: "string",
		required: [true, 'Please provide username'],
		unique: true,
		minLength: [4, 'Username must be at least 4 characters']
	},
	password: {
		type: String,
		required: [true, 'Please provide password'],
		minLength: [4, 'Password must be at least 4 characters'],
		select: false,
	},
	role: {
		type: String,
		enum: ["user", "admin"],
		default: 'user'
	}
},   {
	toJSON: { virtuals: true },
	toObject: { virtuals: true },
})

const User = new mongoose.model('User', userSchema);

module.exports = User;