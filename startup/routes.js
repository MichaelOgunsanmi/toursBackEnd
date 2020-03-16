const express = require('express');

//routes
const exampleRoute = require('../routes/exampleRoute');

//middlewares
const error = require('../middlewares/error');



module.exports = function (app) {
    //register middlewares for parse incoming requests
    app.use(express.json());

    //register routes
    app.use('/api/exampleRoute', exampleRoute);


    //register route handler for 404 requests
    app.use(error);
};