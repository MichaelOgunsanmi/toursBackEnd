const express = require('express');
const router = express.Router();

const {
    doesTourExist,
    authenticateUser
} = require('../middlewares');

const {
    getCheckoutSessionController
} = require('../controllers/booking');


router.get('/checkout-session/:tourId', doesTourExist, authenticateUser, getCheckoutSessionController);


module.exports = router;