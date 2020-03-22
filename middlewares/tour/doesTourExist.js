const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../asyncWrapper');


const doesTourExist = asyncWrapper(async (req, res, next) => {
    const findTour = await Tour.findById(req.params.id);

    if (!findTour) return res.status(404).json({
        status: 'fail',
        message: "Tour doesn't exist"
    });
    next();
});

module.exports = doesTourExist;