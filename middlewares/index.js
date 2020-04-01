const filterRequestQueryObject = require('./filterRequestQueryObject');
const filterForTop5RatedTours = require('./filterForTop5RatedTours');

const globalErrorHandler = require('./globalErrorHandler');

const limiter = require('./rateLimit');

const {doesTourExist} = require('./tour');

const {authenticateUser, authorizeUser} = require('./auth');

const {
    validateUserRequestBody,
    doesUserExist
} = require('./user');

const exampleMiddleware = require('./exampleMiddleware');



module.exports = {
    filterRequestQueryObject,
    filterForTop5RatedTours,
    globalErrorHandler,
    validateUserRequestBody,
    doesTourExist,
    authenticateUser,
    authorizeUser,
    doesUserExist,
    limiter,
    exampleMiddleware
};