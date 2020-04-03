const {Review} = require('../../models/Reviews');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllReviews = asyncWrapper( async (req, res) => {
    let filter = {};

    if (req.params.tourId) filter = { tour: req.params.tourId};

    const reviews = await Review.find(filter);

    res.status(200).json({
        status: 'success',
        results: reviews.length,
        data: {
            reviews
        }
    });
});

module.exports = getAllReviews;