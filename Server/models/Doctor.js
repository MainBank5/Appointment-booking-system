const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorSchema = new Schema({
    email:{type:String, required:true, unique:true},
    name:{type:String, required:true},
    password:{type:String, required:true},
    photo:{type:String},
    phone:{type:String},
    roles:{
        doctor:{
            type:Number,
            default:1001
        },
        admin:Number
    },
    ticketPrice:{type:Number, default:30},

    //doctors details when signingup first time
    specialization:{type:String},
    qualifications:{type:Array},
    experience:{type:Array},
    bio:{type:String, maxLength:50},
    timeSlots:{type:Array},
    reviews:[{type:mongoose.Types.ObjectId, ref:"Review"}],
    rating:{type:Number, default:0},
    totalRating:{type:Number, default:0},
    isApproved:{type:String, enum:["pending", "approved", "cancelled"], default:"pending"},
    appointments:[{type:mongoose.Types.ObjectId, ref:"Appointment"}],
    refreshToken:String
})

module.exports = mongoose.models('Doctor', doctorSchema);