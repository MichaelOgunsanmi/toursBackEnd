const express = require('express');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression');

//routes
const tourRoute = require('../routes/tourRoute');
const userRoute = require('../routes/userRoute');
const reviewRoute = require('../routes/reviewRoute');
const viewRoute = require('../routes/viewRoute');
const bookingRoute = require('../routes/bookingRoute');
const {webHookCheckoutController} = require('../controllers/booking');
const error404Route = require('../routes/error404Route');

//middlewares
const {
    globalErrorHandler,
    limiter
} = require('../middlewares');



module.exports = function (app) {
    //register middlewares for parse incoming requests
    app.use('/api', limiter);
    app.post('/webhook-checkout', express.raw({type: 'application/json'}), webHookCheckoutController);
    app.use(express.json({ limit: '10kb' }));
    app.use(express.urlencoded({limit: '10kb', extended: true}));
    app.use(cookieParser());
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
    app.use(compression());

    //register routes
    app.use('/', viewRoute);
    app.use('/api/v1/tours', tourRoute);
    app.use('/api/v1/users', userRoute);
    app.use('/api/v1/reviews', reviewRoute);
    app.use('/api/v1/bookings', bookingRoute);

    //register route handler for 404 requests
    app.use(error404Route);

    //Catches all errors and handles them
    app.use(globalErrorHandler);
};