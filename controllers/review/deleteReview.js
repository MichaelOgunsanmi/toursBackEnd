const {Review} = require('../../models/Reviews');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const deleteReview = asyncWrapper( async (req, res, next) => {
    const tour = req.params.tourId || req.body.tour;

    const review = await Review.findOneAndDelete({_id: req.params.id, tour, user: req.user._id});

    if (!review) return next({
        statusCode: 404,
        status: 'fail',
        message: "Review does not exist"
    });


    res.status(204).send();
});

module.exports = deleteReview;