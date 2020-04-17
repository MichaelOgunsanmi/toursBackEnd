const {Tour} = require('../../models/Tours');
const {Booking} = require('../../models/Bookings');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getMyBookings = asyncWrapper( async(req, res, next) => {
    const bookings = await Booking.find({user: req.user._id});

    const bookedToursId = bookings.map(booking => booking.tour);

    const tours = await Tour.find({ _id: { $in : bookedToursId}});

    res.status(200).render('overview', {
        title: 'My Tours',
        tours
    })
});


module.exports = getMyBookings;