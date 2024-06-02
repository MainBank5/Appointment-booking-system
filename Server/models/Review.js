const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    text:{type:String, maxLength:250},
    doctor:{type:mongoose.Types.ObjectId, ref:"Doctor"},
    user:{type:mongoose.Types.ObjectId, ref:"User"},
    rating: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 5 
    }
}, {timestamps:true})

module.exports = mongoose.model('Review', reviewSchema);
