
const populateUserAndTourDetailsPreFind = function (next) {
    const booking = this;

    booking.populate('user').populate({
        path: 'tour',
        select: 'name'
    });

    next();
};

module.exports = populateUserAndTourDetailsPreFind;



