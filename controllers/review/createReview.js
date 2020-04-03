const {Review} = require('../../models/Reviews');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const createReview = asyncWrapper( async (req, res) => {
    if (!req.body.user) req.body.user = req.user;
    if (!req.body.tour) req.body.tour = req.params.tourId;

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