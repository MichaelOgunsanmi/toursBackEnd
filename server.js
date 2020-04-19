const app = require('./app');
const winston = require('winston');


const PORT = process.env.PORT;



const server = app.listen(PORT, () => {
    winston.info(`Listening on port ${PORT}...`);
});

process.on('SIGTERM', () => {
    winston.info(`new deployment here`);
    server.close(() => {
        winston.info(`Process terminated lll`);
    });
});

module.exports = server;
