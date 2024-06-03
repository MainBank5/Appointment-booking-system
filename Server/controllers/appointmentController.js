const Appointment = require('../models/Appointment');
const asyncHandler = require('express-async-handler');

const appointmentBooking = asyncHandler(async (req, res) => {
    const { doctor, appointmentDate } = req.body;

    // Validate required fields
    if (!doctor || !appointmentDate) {
        return res.status(400).json({ message: "Doctor and appointment date are required!" });
    }

    try {
        // Extract userId from the req.object as forwarded by the verifyAccess middleware
        const userId = req.userId;

        // Create a new appointment
        const newAppointment = await Appointment.create({
            user: userId,
            doctor,
            appointmentDate,
        });

        if (newAppointment) {
            res.status(201).json({ newAppointment, message: "Appointment created successfully!" });
        } else {
            res.status(500).json({ message: "Failed to book an appointment! Server error encountered." });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to book an appointment! Server error encountered." });
    }
});

module.exports = { appointmentBooking };

