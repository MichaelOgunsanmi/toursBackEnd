const helmet = require('helmet');


module.exports = function (app) {
    app.use(helmet());
    app.enable('trust proxy');
};
