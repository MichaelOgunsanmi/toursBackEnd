const jwt = require('jsonwebtoken');
const {User} = require('../../models/Users');
const asyncWrapper = require('../asyncWrapper');

const authenticateUser = asyncWrapper(async (req, res, next) => {
    if ((!req.header('Authorization') || !req.header('Authorization').startsWith('Bearer ')) && !req.cookies.jwt){
        return next({
            statusCode: 401,
            status: 'fail',
            message: "Invalid token provided"
        });
    }

    let token;
    let decoded;
    let jwtKey;

    if (req.header('Authorization')) token = req.header('Authorization').replace('Bearer ', '');
    else token = req.cookies.jwt;

    if (process.env.NODE_ENV === 'development'){
        jwtKey = "testing$In$Development"
    }else if (process.env.NODE_ENV === 'production'){
        jwtKey = process.env.JWT_PRIVATE_KEY
    }

    try {
        decoded = jwt.verify(token, jwtKey);
    } catch (e) {
        return next({
            statusCode: 401,
            status: 'fail',
            message: "Access denied, Login to access this resource"
        });
    }

    const user = await User.findOne({_id: decoded._id});
    if (!user) return next({
        statusCode: 401,
        status: 'fail',
        message: "User has been deleted"
    });

    if (user.passwordWasChangedAfter(decoded.iat)) return next({
        statusCode: 401,
        status: 'fail',
        message: "User's password has been changed, Login Again"
    });

    req.user = user;
    res.locals.user = user;

    next();
});

module.exports = authenticateUser;