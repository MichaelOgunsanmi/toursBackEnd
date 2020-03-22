const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const getSingleTours = asyncWrapper( async (req, res) => {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
        status: 200,
        data: {
            tour
        }
    });
});

module.exports = getSingleTours;