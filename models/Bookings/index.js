const mongoose = require('mongoose');

const {bookingStatic} = require('./statics');
const {bookingMethod} = require('./methods');
const {populateUserAndTourDetailsPreFind} = require('./pre');
const {bookingPost} = require('./post');
const {validateBooking} = require('./utils');

const bookingSchema = new mongoose.Schema({
    tour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tour',
        required: [true, 'Booking must belong to a tour']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'Booking must belong to a user']
    },
    price: {
        type: Number,
        required: [true, 'Booking must have a price']
    },
    paid: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
});

bookingSchema.statics.bookingStatic = bookingStatic;

bookingSchema.methods.bookingMethod = bookingMethod;

bookingSchema.pre(/^find/,  populateUserAndTourDetailsPreFind);

bookingSchema.post('bookingPost',  bookingPost);


const Booking = mongoose.model('booking', bookingSchema);


module.exports = {
    Booking,
    validateBooking
};

