const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type:String,  required:true, unique:true},
    name:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type:Number},
    photo:{type:String},
    gender:{type:String, enum:["male", "female", "trans", "other"]},
    bloodType:{type:String}, 
    appointments:[{type:mongoose.Types.ObjectId, ref:"Appointment"}]
})



module.exports = mongoose.model('User', userSchema)