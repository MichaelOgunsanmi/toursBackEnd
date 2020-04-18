const jwt = require('jsonwebtoken');
const {User} = require('../../models/Users');
const asyncWrapper = require('../asyncWrapper');

const userIsLoggedIn = asyncWrapper(async (req, res, next) => {
    if (!req.cookies.jwt) return next();

    const token = req.cookies.jwt;
    let decoded;
    let jwtKey;

    if (process.env.NODE_ENV === 'development'){
        jwtKey = "testing$In$Development"
    }else if (process.env.NODE_ENV === 'production'){
        jwtKey = process.env.JWT_PRIVATE_KEY
    }

    try {
        decoded = jwt.verify(token, jwtKey);
    } catch (e) {
        return next();
    }

    const user = await User.findOne({_id: decoded._id});
    if (!user) return next();

    if (user.passwordWasChangedAfter(decoded.iat)) return next();

    res.locals.user = user;

    next();
});

module.exports = userIsLoggedIn;