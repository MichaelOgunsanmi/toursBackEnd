
const populateGuidesUserDetailsPreFind = function (next) {
    const tour = this;

    tour.populate({
        path: 'guides',
        select: '-__v -passwordChangeDate'
    });

    next();
};

module.exports = populateGuidesUserDetailsPreFind;



