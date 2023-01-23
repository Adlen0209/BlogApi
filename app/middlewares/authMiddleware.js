import jwt from 'jsonwebtoken'

const authorization = (req, res, next) => {
    const token = req.headers.authorization;
    console.log('token ICI' + token);
    if(!token) {
        return res.sendStatus(403)
    }

    try {
        const verifiedToken = jwt.verify(token, process.env.TOKEN_KEY);
        req.userId = verifiedToken.userId;
        return next();
    } catch (err) {
        res.status(403).json('unauthorized access')
    }
} 


export {authorization}