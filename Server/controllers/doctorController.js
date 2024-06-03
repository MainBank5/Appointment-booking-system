const asyncHandler = require('express-async-handler');
const Doctor = require('../models/Doctor')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const doctorRegister = asyncHandler (async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) return res.status(400).json({message:"Name, password and email are required!"});

    //check for duplicates
    const duplicate = await Doctor.findOne({email}).exec();
    if(duplicate) return res.sendStatus(409);

    const hashedpassword = await bcrypt.hash(password, 10);
    const result = await Doctor.create({
        name, 
        email,
        password:hashedpassword
    });

    if(result) {
        res.status(201).json({message:"Your doctor's profile was create successfully"})
    } else {
        res.sendStatus(500).json({message:"Internal server error"})
    }

});

const doctorLogin = asyncHandler (async (req, res) => {
    const {email, password} = req.body;
    if(!email || password) return res.status(400).json({message:"Login credentials required"});

    const findUser = await Doctor.findOne({email}).exec();
    if(!findUser) return res.sendStatus(401).json({message:"Unauthorized!"});

    const isMatch = await bcrypt.compare(password, findUser.password);
    if(isMatch) {
        const roles = Object.values(findUser.roles).filter(Boolean)
        const accessToken = jwt.sign (
            {id:findUser._id, roles:findUser.roles},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'30m'}
        );

        const refreshToken = jwt.sign(
            {id:findUser._id},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:'1d'}
        )
        findUser.refreshToken = refreshToken;
        await findUser.save();

        res.cookie('jwt', refreshToken, {httpOnly:true, sameSite:'None', maxAge:24 * 60 * 60 * 100});
        res.json({accessToken, roles})
    } else {
        res.status(401)
    }
});

const doctorsProfile = asyncHandler (async (req, res) => {
    const doctorId = req.params.id;
    if(!doctorId) return res.status(400).json({message:"ID required"});
    
    const foundDoctor = await Doctor.findById({doctorId}).exec();
    if(!foundDoctor) {
        return res.status(204).json({message:"Doctor not found"})
    }

    const {email, phone, specialization, qualifications, experience, bio, timeSlots} = req.body;
    if (email) foundDoctor.email = email;
    if (phone) foundDoctor.phone = phone;
    if (specialization) foundDoctor.specialization = specialization;
    if (qualifications) foundDoctor.qualifications = qualifications;
    if (bio) foundDoctor.bio = bio;
    if (experience) foundDoctor.experience = experience;
    if (timeSlots) foundDoctor.timeSlots = timeSlots;
})


module.exports = {doctorRegister, doctorLogin}