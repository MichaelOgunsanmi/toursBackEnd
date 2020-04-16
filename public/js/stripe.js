import axios from 'axios';
import {showAlert} from "./alerts";


const stripe = Stripe('pk_test_yIU3uTJZrdESQAAbGb2oYq7l00N6rjtni0');


export const handleBookTour = async (event) => {
  event.target.textContent = 'Processing...';

  const {tourId} = event.target.dataset;

  try{
    const stripeCheckoutSession = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: stripeCheckoutSession.data.session.id
    });
  } catch(error) {
    showAlert('error', error.response.data.message);
  }
};