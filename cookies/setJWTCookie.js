const {CONVERTDAYSTOMILLISECONDS} = require('../utils');

const setJWTCookie = (token, req, res) => {
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * CONVERTDAYSTOMILLISECONDS
        ),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    };

    res.cookie('jwt', token, cookieOptions);
};


module.exports = setJWTCookie;