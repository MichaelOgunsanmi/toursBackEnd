const filterRequestQueryObject = require('./filterRequestQueryObject');
const filterForTop5RatedTours = require('./filterForTop5RatedTours');

const error = require('./globalErrorHandler');

const {doesTourExist} = require('./tour');

const {authenticateUser, authorizeUser} = require('./auth');

const {doesUserExist} = require('./user');

const exampleMiddleware = require('./exampleMiddleware');



module.exports = {
    filterRequestQueryObject,
    filterForTop5RatedTours,
    error,
    doesTourExist,
    authenticateUser,
    authorizeUser,
    doesUserExist,
    exampleMiddleware
};