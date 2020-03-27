
const authorizeUser = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) return next({
            statusCode: 403,
            status: 'fail',
            message: 'You are not allowed to perform this action.'
        });

        next();
    };
};

module.exports = authorizeUser;