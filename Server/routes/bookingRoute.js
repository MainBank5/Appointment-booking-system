const express = require('express');
const router = express.Router();
const {getDoctorProfile} = require('../controllers/BookDocController');

router.get('/:id', getDoctorProfile);

module.exports = router