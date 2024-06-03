const Appointment = require('../models/Appointment');
const asyncHandler = require('express-async-handler');

const appointmentBooking = asyncHandler(async (req, res) => {
    const { user, doctor, appointmentDate } = req.body;

    // Validate required fields
    if (!user || !doctor || !appointmentDate) {
        return res.status(400).json({ message: "User, doctor, and appointment date are required!" });
    }

    // Create a new appointment
    const newAppointment = await Appointment.create({
        user,
        doctor,
        appointmentDate,
    });

    res.status(201).json({ newAppointment, message: "Appointment created successfully!" });
});

module.exports = { appointmentBooking };
