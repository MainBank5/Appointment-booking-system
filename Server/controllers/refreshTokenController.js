const User = require('../models/User');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')

const handleRefreshToken = asyncHandler ( async (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    res.clearCookie('jwt', {httpOnly:true, sameSite:"none"});

    const foundUser = await User.findOne({refreshToken}).exec();
    
    //detect refresh token reuse 
    if(!foundUser) {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) return res.sendStatus(403);
                const hackedUser = await User.findById({_id:decoded.id});
                hackedUser.refreshToken= [];
                const result = await hackedUser.save();
                console.log(result)
            }
        )
     return res.sendStatus(403) //forbidden
        
    } 
    
    const newRefreshTokenArray = foundUser.refreshToken.filter(rt => rt !== refreshToken)
        
        //evaluate jwt - check if its being reused by a foundUser
        jwt.verify(
            refreshToken,
            process.env.REFRESH_USER_TOKEN,
            async (err, decoded) => {
                if(err ) {
                    foundUser.refreshToken = [...newRefreshTokenArray];
                    await foundUser.save()
                }

                if(err || foundUser._id !== decoded.id) return res.sendStatus(403)
                
                //if the refreshtoken was valid
                const accessToken = jwt.sign(
                {id:decoded.id},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'1h'}
               )

               const newRefreshToken = jwt.sign(
                  {id:foundUser._id},
                  process.env.REFRESH_TOKEN_SECRET,
                  {expiresIn:'1d'}
               )
               //update refreshToken in db
               foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
               const result = await foundUser.save();
               console.log(result);
            
              //set secure cookie witth refreshToken
              res.cookie('jwt', newRefreshToken, {httpOnly:true, sameSite:"None", maxAge:24*60*60*100})
              //send authorization token to user
              res.json({accessToken})
                
            }
           
        )         

})

module.exports = { handleRefreshToken }