const jwt = require('jsonwebtoken');

const verifyAccess = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;

    if(!authHeader?.startsWith('Bearer')) return res.status(401).json({message:"Access denied!"});

    const token = authHeader.split(' ')[1];
    console.log(token);
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decode) => {
            if (err) return res.status(403).json({message:"Access denied"});
            req.userId = decode.id;//forward the user id
            req.roles= decode.roles;
            next();
        }
    )

}

module.exports = {verifyAccess};