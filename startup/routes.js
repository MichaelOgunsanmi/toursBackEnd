const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

//routes
const tourRoute = require('../routes/tourRoute');
const userRoute = require('../routes/userRoute');
const reviewRoute = require('../routes/reviewRoute');
const error404Route = require('../routes/error404Route');

//middlewares
const {
    globalErrorHandler,
    limiter
} = require('../middlewares');



module.exports = function (app) {
    //register middlewares for parse incoming requests
    app.use('/api', limiter);
    app.use(express.json({ limit: '10kb' }));
    app.use(mongoSanitize());
    app.use(xss());
    app.use(hpp({
        whitelist: [
            'duration',
            'ratingsAverage',
            'ratingsQuantity',
            'maxGroupSize',
            'difficulty',
            'price'
        ]}));

    //register routes
    app.use('/api/v1/tours', tourRoute);
    app.use('/api/v1/users', userRoute);
    app.use('/api/v1/reviews', reviewRoute);


    //register route handler for 404 requests
    app.use(error404Route);

    //Catches all errors and handles them
    app.use(globalErrorHandler);
};