const {Review, validateReviewInputsFromUser} = require('../../models/Reviews');
const asyncWrapper = require('../../middlewares/asyncWrapper');


const updateReview = asyncWrapper( async (req, res, next) => {
    if (!req.body.tour) req.body.tour = req.params.tourId;
    req.body.user = `${req.user._id}`;

    const {error} = validateReviewInputsFromUser(req.body);

    if (error || Object.keys(req.body).length < 3) return next({
        statusCode: 400,
        status: 'fail',
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });

    const review = await Review.findOneAndUpdate({_id: req.params.id, tour: req.body.tour, user: req.user._id}, req.body, {
        new: true,
        runValidators: true
    });

    if (!review) return next({
        statusCode: 404,
        status: 'fail',
        message: 'Review does not exist'
    });

    res.status(200).json({
        status: 'success',
        data: {
            review
        }
    });
});

module.exports = updateReview;