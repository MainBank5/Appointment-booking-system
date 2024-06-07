const Doctor = require('../models/Doctor');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')

const handleRefreshToken = asyncHandler ( async (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    res.clearCookie('jwt', {httpOnly:true, sameSite:'None', maxAge:24 * 60 * 60 * 100});

    const foundDoctor = await Doctor.findOne({refreshToken}).exec();

    if(!foundDoctor) return res.sendStatus(403) //forbidden

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || foundDoctor._id !== decoded.id) return res.sendStatus(403);

            const roles = Object.values(foundDoctor.roles).filter(Boolean);
            const accessToken = jwt.sign(
                {id:decoded.id, roles:roles},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'1h'}
            )
            res.json({accessToken, roles})
        }
    )

})

module.exports = { handleRefreshToken }