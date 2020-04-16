
const populateTourDetailsPreFind = function (next) {
    const booking = this;

    booking.populate({
        path: 'tour',
        select: 'name'
    });

    next();
};

module.exports = populateTourDetailsPreFind;







