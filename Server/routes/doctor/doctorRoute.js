const express = require('express');
const router = express.Router();
const doctorController = require('../../controllers/doctorController');

router.route('/')
     .post(doctorController.doctorRegister)
     .post(doctorController.doctorLogin)
     .get(doctorController.getAllDoctors);


router.route('/:id')
       .get(doctorController);



module.exports = router;