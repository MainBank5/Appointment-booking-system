const Appointment = require('../models/Appointment');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

const appointmentBooking = asyncHandler(async (req, res) => {
    const doctor = req?.params?.id;
    const { appointmentDate } = req.body;
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

        //update the user appointment details in the database
        if(newAppointment) {
            const user = await User.findByIdAndUpdate(
                userId, 
                { $push: {appointments:newAppointment._id}},
                {new:true}
            );
            if (user) {
                res.status(201).json({ newAppointment, message: "Appointment created successfully!" });
            } else{
                res.status(500).json({ message: "Failed to update user's appointment" });
            }


        } else {
            return res.status(500).json({ message: "Failed to create appointment! Server error encountered." });
        }

    } catch (error) {
        return res.status(500).json({ message: "Server error encountered while booking appointment.", error: error.message });
    }
        
        
   
});

module.exports = { appointmentBooking };


