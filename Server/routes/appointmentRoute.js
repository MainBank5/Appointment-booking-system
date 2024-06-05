const express = require('express');
const router = express.Router();
const { appointmentBooking } = require('../controllers/appointmentController');

// Route to handle appointment booking
router.put('/', appointmentBooking);

module.exports = router;
