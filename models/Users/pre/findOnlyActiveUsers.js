const findOnlyActiveUsers = function (next) {
    const user = this;

    user.find({active: {$ne: false}});

    next();
};

module.exports = findOnlyActiveUsers;