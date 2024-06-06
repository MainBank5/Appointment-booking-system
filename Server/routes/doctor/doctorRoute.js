const express = require('express');
const router = express.Router();
const doctorController = require('../../controllers/doctorController');

router.route('/')
     .post(doctorController.doctorRegister)
     .post(doctorController.doctorLogin)
     .get(doctorController.getAllDoctors)
     .put(doctorController.handleDoctorLogout)

router.route('/:id')
      .put(doctorController.updateDoctor)




module.exports = router;