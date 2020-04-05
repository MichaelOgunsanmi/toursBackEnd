
const error404Route =  (req, res, next) => {
    return next({
        statusCode: 404,
        status: 'fail',
        message: `The url ${req.protocol}://${req.get('host')}${req.url} does not contain any useful results`
    });
};

module.exports = error404Route;
