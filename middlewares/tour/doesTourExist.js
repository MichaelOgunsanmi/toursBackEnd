const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../asyncWrapper');


const doesTourExist = asyncWrapper(async (req, res, next) => {
    const tourId = req.params.id || req.params.tourId;

    const findTour = await Tour.findById(tourId);

    if (!findTour) return next({
        statusCode: 404,
        status: 'fail',
        message: "Tour doesn't exist"
    });

    req.tour = findTour;

    next();
});

module.exports = doesTourExist;