const stripe = require('stripe')('sk_test_fnHdkinp2DqJ4zCBwsYFeg5R00KaaMGSmr' || process.env.STRIPE_SECRET_KEY);

const asyncWrapper = require('../../middlewares/asyncWrapper');



const getCheckoutSession = asyncWrapper( async (req, res, next) => {

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: `${req.protocol}://${req.get('host')}/`,
        cancel_url: `${req.protocol}://${req.get('host')}/tour/${req.tour.slug}`,
        customer_email: req.user.email,
        client_reference_id: req.params.tourId,
        line_items: [
            {
                name: `${req.tour.name} Tour`,
                description: req.tour.summary,
                images: [`https://www.natours.dev/img/tours/${req.tour.imageCover}`],
                amount: req.tour.price * 100,
                currency: 'usd',
                quantity: 1
            }
        ]
    });

    res.status(200).json({
        status: 'success',
        session: stripeCheckoutSession
    })
});

module.exports = getCheckoutSession;