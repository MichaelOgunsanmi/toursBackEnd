const winston = require('winston');

const globalErrorHandler = function (err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'Error';

    err.message = err.message || 'Something went wrong with the server';
    if (process.env.NODE_ENV === 'production' && err.statusCode === 500){
        err.message = 'Something went wrong with the server';
    }

    winston.error(err.message, err);

    if (req.originalUrl.startsWith('/api')) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    } else {
        res.status(err.statusCode).render('error', {
            title: 'Something went wrong',
            errorMessage: err.message
        });
    }

};

module.exports = globalErrorHandler;
