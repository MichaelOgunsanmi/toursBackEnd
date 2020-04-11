const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getSingleTour = asyncWrapper( async(req, res, next) => {
    const tour = await Tour
        .findOne({slug: req.params.tourSlug})
        .populate({
            path: 'reviews',
            fields: 'review rating user'
        });

    if (!tour) return next({
        statusCode: 404,
        status: 'fail',
        message: "There is no tour with that name"
    });

    res.status(200).render('tour', {
        title: `${tour.name} Tour`,
        tour
    })
});


module.exports = getSingleTour;
