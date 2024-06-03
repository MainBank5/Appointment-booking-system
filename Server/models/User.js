const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    photo: { type: String },
    gender: { type: String, enum: ["male", "female", "trans", "other"] },
    bloodType: { type: String },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
    roles: {
        patient: { type: Number, default: 1002 }
      
    },
    refreshToken: { type: String }
});




module.exports = mongoose.model('User', userSchema)