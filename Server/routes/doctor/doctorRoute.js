const express = require('express');
const router = express.Router();
const doctorController = require('../../controllers/doctorController');

router.route('/')
     .post(doctorController.doctorRegister)
     .post(doctorController.doctorLogin)
     .put(doctorController.updateDoctor)
     .get(doctorController.getAllDoctors);






module.exports = router;