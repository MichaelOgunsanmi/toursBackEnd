const exampleMiddleware = (req, res, next) => {
    //Code to be run through the middleware
    next();
};

module.exports = exampleMiddleware;