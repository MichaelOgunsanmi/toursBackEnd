module.exports = function (app) {
    require('./logging')();
    require('./config')();
    require('./routes')(app);
    require('./db')();
};