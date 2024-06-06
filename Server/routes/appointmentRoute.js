const express = require('express');
const router = express.Router();
const { appointmentBooking } = require('../controllers/appointmentController');

// Route to handle appointment booking
router.route('/:id').
      post(appointmentBooking);

module.exports = router;
