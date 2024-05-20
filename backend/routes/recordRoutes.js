const express = require('express');
const recordController = require("../controllers/recordController");
const userController = require("../controllers/userController");
const router = express.Router();

router.route('/')
	.get(userController.protect, recordController.getAllRecords)
	.post(userController.protect, recordController.newRecord)

router.route('/:id')
	.delete(userController.protect, recordController.removeRecord)

module.exports = router;
