const {Booking, validateBooking} = require('../../models/Bookings');

const asyncWrapper = require('../asyncWrapper');


const createBookingCheckout = asyncWrapper( async (req, res, next) => {
    const {tour, user, price} = req.query;

    if (!tour && !user && !price) return next();

    const bookingDetails = {tour, user, price};

    const {error} = validateBooking(bookingDetails);

    if (error) return res.status(400).json({
        status: 400,
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });

    const newBooking = new Booking(bookingDetails);

    const createdBooking = await newBooking.save();

    res.redirect(req.originalUrl.split('?')[0]);
});

module.exports = createBookingCheckout;