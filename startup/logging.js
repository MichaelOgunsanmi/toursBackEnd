const winston = require('winston');
// require('winston-mongodb');
// require('express-async-errors');

const server = require('../server');


const winstonSetting = (filename) => {
    return {
        filename,
        format: winston.format.combine(
            winston.format.timestamp({
                format:'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.printf(info => {
                return JSON.stringify(info, null,4)
            })
        )
    };
};


module.exports = function () {

    process.on('unhandledRejection', (ex) => {
        server.close(() => {
            throw(ex)
        });
    });

    winston.add(
        new winston.transports.File({
            ...winstonSetting('./log/uncaughtExceptions.log'),
            handleExceptions: true
        })
    );

    winston.add(
        new winston.transports.File(
            winstonSetting('./log/logfile.log')
        )
    );

    // winston.add(
    //     new winston.transports.MongoDB(
    //         dbConnection()
    //     )
    // );

    winston.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    );

    process.on('SIGTERM', () => {
        winston.info(`SIGTERM received, shutting down gracefully`);
        server.close(() => {
            winston.info(`Process terminated`);
        });
    });
};