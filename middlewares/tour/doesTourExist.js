const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../asyncWrapper');


const doesTourExist = asyncWrapper(async (req, res, next) => {
    const findTour = await Tour.findById(req.params.id);

    if (!findTour) return next({
        statusCode: 404,
        status: 'fail',
        message: "Tour doesn't exist"
    });

    req.tour = findTour;

    next();
});

module.exports = doesTourExist;