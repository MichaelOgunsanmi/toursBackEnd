module.exports = function () {
    if (!process.env.PORT) throw new Error ('FATAL ERROR: PORT is not defined');
    if (process.env.NODE_ENV === 'development' && !process.env.DB_LOCAL) throw new Error ('FATAL ERROR: INVALID DB_LOCAL CONNECTION STRING');
    if (process.env.NODE_ENV === 'production' && !process.env.DB_ONLINE) throw new Error ('FATAL ERROR: INVALID DB_ONLINE CONNECTION STRING');
};