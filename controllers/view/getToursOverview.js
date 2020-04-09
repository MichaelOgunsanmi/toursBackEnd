const {Tour} = require('../../models/Tours');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getToursOverview = asyncWrapper( async(req, res, next) => {
    const tours = await Tour.find();

    res.status(200).render('overview', {
        title: 'Exciting tours for adventurous people',
        tours
    })
});


module.exports = getToursOverview;