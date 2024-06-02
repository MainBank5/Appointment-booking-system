const mongoose = require('mongoose');
const { Schema } = mongoose

const appointmentSchema = new Schema({
    user:{type:mongoose.Types.ObjectId, ref:"User"},
    doctor:{type:mongoose.Types.ObjectId, ref:"Doctor"},
    isPaid:{type:Boolean, default:false}
}, {timestamps:true})

module.exports = mongoose.model('Appointment', appointmentSchema);
