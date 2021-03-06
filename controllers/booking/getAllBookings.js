const {Booking} = require('../../models/Bookings');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllBookings = asyncWrapper( async (req, res, next) => {
    if (req.query.page && req.skip >= await Booking.countDocuments()) return next({
        statusCode: 404,
        status: 'fail',
        message:'This page does not exist'
    });


    const bookings = await Booking
        .find(req.queryParams)
        .sort(req.sortBy)
        .select(req.select)
        .skip(req.skip)
        .limit(req.limit);

    res.status(200).json({
        status: 'success',
        results: bookings.length,
        data: {
            bookings
        }
    });
});

module.exports = getAllBookings;