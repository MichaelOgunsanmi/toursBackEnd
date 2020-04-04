const {Review, validateReview} = require('../../models/Reviews');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const createReview = asyncWrapper( async (req, res, next) => {
    if (!req.body.tour) req.body.tour = req.params.tourId;
    req.body.user = `${req.user._id}`;

    const {error} = validateReview(req.body);

    if (error || Object.keys(req.body).length < 3) return next({
        statusCode: 400,
        status: 'fail',
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error
    });

    const newReview = new Review(req.body);

    const review = await newReview.save();

    res.status(200).json({
        status: 'success',
        data: {
            review
        }
    });
});

module.exports = createReview;