const express = require('express');
const router = express.Router();
const {getAllDoctors} = require('../controllers/doctorController');

router.get('/', getAllDoctors)

module.exports = router