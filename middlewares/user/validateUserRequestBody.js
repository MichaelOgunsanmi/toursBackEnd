const {validateUserInputsFromUser} = require('../../models/Users');

const asyncWrapper = require('../asyncWrapper');


const validateUserRequestBody = asyncWrapper(async (req, res, next) => {
    const {error} = validateUserInputsFromUser(req.body);

    if (error || Object.keys(req.body).length === 0) return next({
        statusCode: 400,
        status: 'fail',
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });


    next();
});

module.exports = validateUserRequestBody;