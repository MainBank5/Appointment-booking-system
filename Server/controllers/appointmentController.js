const Appointment = require('../models/Appointment');
const asyncHandler = require('express-async-handler');

const appointmentBooking = asyncHandler(async (req, res) => {
    const { doctor, appointmentDate } = req.body;
    //console.log('Request body:', req.body);
    //console.log('User ID from token:', req.userId);

    if (!doctor || !appointmentDate) {
        return res.status(400).json({ message: "Doctor and appointment date are required!" });
    }

    const userId = req.userId;

    try {
        const newAppointment = await Appointment.create({
            user: userId,
            doctor,
            appointmentDate,
        });

        res.status(201).json({ newAppointment, message: "Appointment created successfully!" });
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ message: "Failed to book an appointment! Server error encountered" });
    }
});

module.exports = { appointmentBooking };


