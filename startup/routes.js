const express = require('express');

//routes
const tourRoute = require('../routes/tourRoute');

//middlewares
const error = require('../middlewares/error');



module.exports = function (app) {
    //register middlewares for parse incoming requests
    app.use(express.json());

    //register routes
    app.use('/api/v1/tours', tourRoute);


    //register route handler for 404 requests
    app.use(error);
};