const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const getSingleTours = asyncWrapper( async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: req.tour
        }
    });
});

module.exports = getSingleTours;