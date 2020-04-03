
const populateTourDetailsPreFind = function (next) {
    const review = this;

    review.populate({
        path: 'tour',
        select: 'name'
    });

    next();
};

module.exports = populateTourDetailsPreFind;



