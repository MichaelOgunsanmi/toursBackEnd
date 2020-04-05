const {Review} = require('../../models/Reviews');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getSingleReview = asyncWrapper( async (req, res) => {
    const review = await Review.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            review
        }
    });
});

module.exports = getSingleReview;