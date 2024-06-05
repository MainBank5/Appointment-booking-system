const jwt = require('jsonwebtoken');

const verifyAccess = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        console.log('No auth header or invalid format');
        return res.status(401).json({ message: "Access denied!" });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log('Token verification failed', err);
            return res.status(403).json({ message: "Access denied" });
        }
        req.userId = decoded.id;
        req.roles = decoded.roles;
        next();
    });
};

module.exports = { verifyAccess };
