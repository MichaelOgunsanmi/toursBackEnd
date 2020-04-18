const jwt = require('jsonwebtoken');


const generateAuthToken = function (){
    const user = this;
    let jwtKey;

    if (process.env.NODE_ENV === 'development'){
        jwtKey = "testing$In$Development"
    }else if (process.env.NODE_ENV === 'production'){
        jwtKey = process.env.JWT_PRIVATE_KEY
    }

    return jwt.sign({_id: user._id.toString()}, jwtKey, {expiresIn: `${process.env.JWT_COOKIE_EXPIRES_IN}d`});
};

module.exports = generateAuthToken;


