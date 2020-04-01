module.exports = function (app) {
    require('./logging')();
    require('./config')();
    require('./security')(app);
    require('./routes')(app);
    require('./db')();
};