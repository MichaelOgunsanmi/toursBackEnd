const app = require('./app');
const winston = require('winston');


const PORT = process.env.PORT;


const server = app.listen(PORT, () => {
    winston.info(`Listening on port ${PORT}...`);
});


module.exports = server;
