const asyncHandler = require('express-async-handler');
const Review = require('../models/Review');

const handleReview = asyncHandler( async(req, res) => {
    const doctorId = req?.params?.id
    const { rating, reviewText} = req.body;
    if(!doctorId || !rating || !reviewText) return res.status(400).json({message:"Rating and review required"});
    
    const userId = req.userId;

    // Check if the user has already reviewed this doctor
    const existingReview = await Review.findOne({ user: userId, doctor: doctorId }).exec();
    if (existingReview) {
        return res.status(400).json({ message: "You have already reviewed this doctor" });
    }

    
    const newReview = await Review.create({
        rating,
        reviewText,
        user:userId,
        doctor:doctorId
    });
    
    if(newReview) {
        res.status(201).json({newReview, message:"Your review was added"})
    } else {
        res.status(500).json({message:"Failed to create review!Server error encountered"})
    }
    
})

module.exports = {handleReview}