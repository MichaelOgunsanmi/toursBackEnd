const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getSingleTour = asyncWrapper( async (req, res) => {
    const tour = await Tour.findById(req.params.id).populate('reviews');

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
});

module.exports = getSingleTour;