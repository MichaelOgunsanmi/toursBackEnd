const {CONVERTDAYSTOMILLISECONDS} = require('../utils');

const setJWTCookie = (token, res) => {
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * CONVERTDAYSTOMILLISECONDS
        ),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    res.cookie('jwt', token, cookieOptions);
};


module.exports = setJWTCookie;