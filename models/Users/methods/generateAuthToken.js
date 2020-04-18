const jwt = require('jsonwebtoken');


const generateAuthToken = function (){
    const user = this;
    let jwtKey;

    if (process.env.NODE_ENV === 'development'){
        jwtKey = "testing$In$Development"
    }else if (process.env.NODE_eNV === 'production'){
        jwtKey = process.env.JWT_PRIVATE_KEY
    }

    console.log(jwtKey, 'jwtkey')

    return jwt.sign({_id: user._id.toString()}, jwtKey, {expiresIn: "7d"});
};

module.exports = generateAuthToken;


