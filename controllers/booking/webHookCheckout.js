const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const {User} = require('../../models/Users');
const {Booking} = require('../../models/Bookings');
const {CONVERTBETWEENDOLLARSANDCENT} = require('../../utils');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const createBookingCheckout = async session => {
    const tour = session.client_reference_id;
    const user = (await User.findOne({email: session.customer_email}))._id;
    const price = session.display_items[0].amount / CONVERTBETWEENDOLLARSANDCENT;

    const bookingDetails = {tour, user, price};

    const newBooking = new Booking(bookingDetails);

    await newBooking.save();
};

const webHookCheckout = asyncWrapper( async (req, res, next) => {
    const signature = req.headers['stripe-signature'];
    let stripeWebHookEvent;

    try {
        stripeWebHookEvent = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
    }catch (error) {
        return res.status(400).send(`Webhook error: ${error.message}`)
    }

    if (stripeWebHookEvent.type === 'checkout.session.completed') await createBookingCheckout(stripeWebHookEvent.data.object);

    res.status(200).json({ received: true })
});

module.exports = webHookCheckout;