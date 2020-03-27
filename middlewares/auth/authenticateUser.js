const jwt = require('jsonwebtoken');
const {User} = require('../../models/Users');
const asyncWrapper = require('../asyncWrapper');

const authenticateUser = asyncWrapper(async (req, res, next) => {
    if (!req.header('Authorization') || !req.header('Authorization').startsWith('Bearer ')){
        return next({
            statusCode: 401,
            status: 'fail',
            message: "Invalid token provided"
        });
    }

    const token = req.header('Authorization').replace('Bearer ', '');
    let decoded;
    let jwtKey;

    if (process.env.NODE_ENV === 'development'){
        jwtKey = "testing$In$Development"
    }else if (process.env.NODE_eNV === 'production'){
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
    if (!user) next({
        statusCode: 401,
        status: 'fail',
        message: "User has been deleted"
    });

    console.log(user, user.passwordChangeDate, decoded.iat, decoded)

    if (user.passwordWasChangedAfter(decoded.iat))next({
        statusCode: 401,
        status: 'fail',
        message: "User's password has been changed, Login Again"
    });

    req.user = user;

    next();
});

module.exports = authenticateUser;