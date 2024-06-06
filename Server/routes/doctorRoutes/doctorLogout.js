const express = require('express');
const router = express.Router();
const {handleDoctorLogout} = require('../../controllers/doctorController');

router.post('/', handleDoctorLogout)

module.exports = router