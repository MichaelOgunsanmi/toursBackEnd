const {Review} = require('../../models/Reviews');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllReviews = asyncWrapper( async (req, res) => {
    const reviews = await Review.find({});

    res.status(200).json({
        status: 'success',
        results: reviews.length,
        data: {
            reviews
        }
    });
});

module.exports = getAllReviews;