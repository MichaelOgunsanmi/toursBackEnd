const filterRequestQueryObject = require('./filterRequestQueryObject');
const filterForTop5RatedTours = require('./filterForTop5RatedTours');

const globalErrorHandler = require('./globalErrorHandler');

const limiter = require('./rateLimit');

const {
    uploadTourPhoto,
    resizeTourPhoto,
    doesTourExist
} = require('./tour');

const {
    authenticateUser,
    authorizeUser,
    userIsLoggedIn
} = require('./auth');

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
    uploadTourPhoto,
    resizeTourPhoto,
    doesTourExist,
    validateUserRequestBody,
    uploadUserPhoto,
    resizeUserPhoto,
    authenticateUser,
    authorizeUser,
    userIsLoggedIn,
    doesUserExist,
    getCurrentUser,
    limiter,
    exampleMiddleware
};