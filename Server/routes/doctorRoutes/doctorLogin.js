const express = require('express');
const router = express.Router();
const {handleDoctorLogin} = require('../../controllers/doctorController');

router.post('/', handleDoctorLogin)

module.exports = router