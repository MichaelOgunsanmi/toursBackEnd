const filterRequestQueryObject = require('./filterRequestQueryObject');
const filterForTop5RatedTours = require('./filterForTop5RatedTours');

const globalErrorHandler = require('./globalErrorHandler');

const limiter = require('./rateLimit');

const {doesTourExist} = require('./tour');

const {authenticateUser, authorizeUser} = require('./auth');

const {
    validateUserRequestBody,
    uploadUserPhoto,
    resizeUserPhoto,
    doesUserExist,
    getCurrentUser
} = require('./user');

const exampleMiddleware = require('./exampleMiddleware');



module.exports = {
    filterRequestQueryObject,
    filterForTop5RatedTours,
    globalErrorHandler,
    doesTourExist,
    validateUserRequestBody,
    uploadUserPhoto,
    resizeUserPhoto,
    authenticateUser,
    authorizeUser,
    doesUserExist,
    getCurrentUser,
    limiter,
    exampleMiddleware
};