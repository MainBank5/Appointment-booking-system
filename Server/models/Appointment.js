const mongoose = require('mongoose');
const { Schema } = mongoose

const appointmentSchema = new Schema({
    user:{type:mongoose.Types.ObjectId, ref:"User", required:true},
    doctor:{type:mongoose.Types.ObjectId, ref:"Doctor", required:true},
    appointmentDate: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
      },
    isPaid:{type:Boolean, default:false}
}, {timestamps:true})

module.exports = mongoose.model('Appointment', appointmentSchema);
