const {User} = require('../../models/Users');

const asyncWrapper = require('../asyncWrapper');


const doesUserExist = asyncWrapper(async (req, res, next) => {
    if (!req.body.email) return next({
        statusCode: 400,
        status: 'fail',
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });

    const findUser = await User.findOne({email: req.body.email});

    if (!findUser) return next({
        statusCode: 404,
        status: 'fail',
        message: "User with the given email doesn't exist"
    });

    req.user = findUser;

    next();
});

module.exports = doesUserExist;