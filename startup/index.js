module.exports = function (app) {
    require('./logging')();
    require('./config')();
    require('./security')(app);
    require('./views')(app);
    require('./routes')(app);
    require('./db')();
};