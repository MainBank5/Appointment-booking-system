const User = require('../models/User');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')

const handleRefreshToken = asyncHandler ( async (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;
    const foundUser = await User.findOne({refreshToken}).exec();

    if(!foundUser) return res.sendStatus(403) //forbidden

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || foundUser._id !== decoded.id) return res.sendStatus(403)

            const accessToken = jwt.sign(
                {id:decoded.id},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'1h'}
            )
            res.json({accessToken})
        }
    )

})

module.exports = { handleRefreshToken }