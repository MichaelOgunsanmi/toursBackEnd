const express = require('express');

//routes
const tourRoute = require('../routes/tourRoute');
const userRoute = require('../routes/userRoute');
const error404Route = require('../routes/error404Route');

//middlewares
const globalErrorHandler = require('../middlewares/globalErrorHandler');



module.exports = function (app) {
    //register middlewares for parse incoming requests
    app.use(express.json());

    //register routes
    app.use('/api/v1/tours', tourRoute);
    app.use('/api/v1/users', userRoute);


    //register route handler for 404 requests
    app.use(error404Route);

    //Catches all errors and handles them
    app.use(globalErrorHandler);
};