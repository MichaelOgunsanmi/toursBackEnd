
const populateUserDetailsPreFind = function (next) {
    const review = this;

    review.populate({
        path: 'user',
        select: 'name photo'
    });

    next();
};

module.exports = populateUserDetailsPreFind;



