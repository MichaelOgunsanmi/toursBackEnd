
const getCurrentUser = (req, res, next) => {
    req.params.id = req.user._id;

    next();
};

module.exports = getCurrentUser;