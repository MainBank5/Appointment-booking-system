const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    text:{type:String, maxLength:250},
    doctor:[{type:mongoose.Types.ObjectId, ref:"Doctor"}],
    user:[{type:mongoose.Types.ObjectId, ref:"User"}]
})

module.exports = mongoose.model('Review', reviewSchema);
