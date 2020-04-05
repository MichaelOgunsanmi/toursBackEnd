const {Review} = require('../../models/Reviews');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllReviews = asyncWrapper( async (req, res, next) => {
    let filter = {...req.queryParams};

    if (req.params.tourId) filter = { ...filter, tour: req.params.tourId};

    if (req.query.page && req.skip >= await Review.countDocuments()) return next({
        statusCode: 404,
        status: 'fail',
        message:'This page does not exist'
    });


    const reviews = await Review
        .find(filter)
        .sort(req.sortBy)
        .select(req.select)
        .skip(req.skip)
        .limit(req.limit);


    res.status(200).json({
        status: 'success',
        results: reviews.length,
        data: {
            reviews
        }
    });
});

module.exports = getAllReviews;