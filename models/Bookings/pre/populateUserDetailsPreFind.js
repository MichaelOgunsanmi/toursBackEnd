
const populateUserDetailsPreFind = function (next) {
    const booking = this;

    booking.populate({
        path: 'user',
        select: 'name photo'
    });

    next();
};

module.exports = populateUserDetailsPreFind;



