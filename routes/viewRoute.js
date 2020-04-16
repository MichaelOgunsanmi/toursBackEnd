const express = require('express');
const router = express.Router();

const {
    userIsLoggedIn,
    authenticateUser,
    createBookingCheckout
} = require('../middlewares');

const {
    loginController,
    getSingleTourController,
    getToursOverviewController,
    getUserAccountDetailsController
} = require('../controllers/view');


router.get('/me', authenticateUser, getUserAccountDetailsController);

router.use(userIsLoggedIn);
router.get('/', createBookingCheckout, getToursOverviewController);
router.get('/tour/:tourSlug', getSingleTourController);
router.get('/login', loginController);


module.exports = router;