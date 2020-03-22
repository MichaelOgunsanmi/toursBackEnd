const filterRequestQueryObject = require('./filterRequestQueryObject');
const filterForTop5RatedTours = require('./filterForTop5RatedTours');
const error = require('./globalErrorHandler');
const {doesTourExist} = require('./tour');
const exampleMiddleware = require('./exampleMiddleware');



module.exports = {
    filterRequestQueryObject,
    filterForTop5RatedTours,
    error,
    doesTourExist,
    exampleMiddleware
};