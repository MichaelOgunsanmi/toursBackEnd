const helmet = require('helmet');
const cors = require('cors');


module.exports = function (app) {
    app.use(cors());
    app.options('*', cors());
    app.use(helmet());
    app.enable('trust proxy');
};
