const {Review} = require('../../models/Reviews');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const deleteReview = asyncWrapper( async (req, res, next) => {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) return next({
        statusCode: 404,
        status: 'fail',
        message: "Review does not exist"
    });


    res.status(204).send();
});

module.exports = deleteReview;