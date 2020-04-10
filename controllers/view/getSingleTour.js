const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getSingleTour = asyncWrapper( async(req, res, next) => {
    const tour = await Tour
        .findOne({slug: req.params.tourSlug})
        .populate({
            path: 'reviews',
            fields: 'review rating user'
        });


    res.status(200).render('tour', {
        title: tour.name,
        tour
    })
});


module.exports = getSingleTour;
