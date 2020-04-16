const express = require('express');
const router = express.Router();

const {
    doesTourExist,
    authenticateUser,
    filterRequestQueryObject
} = require('../middlewares');

const {
    getAllBookingsController,
    getCheckoutSessionController
} = require('../controllers/booking');


router.get('/checkout-session/:tourId', doesTourExist, authenticateUser, getCheckoutSessionController);

router
    .route('/')
    .get(filterRequestQueryObject, authenticateUser, getAllBookingsController);


module.exports = router;