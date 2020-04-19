const express = require('express');
const router = express.Router();

const {
    userIsLoggedIn,
    authenticateUser,
} = require('../middlewares');

const {
    loginController,
    getSingleTourController,
    getToursOverviewController,
    getUserAccountDetailsController,
    getMyBookingsController
} = require('../controllers/view');


router.get('/me', authenticateUser, getUserAccountDetailsController);
router.get('/bookings', authenticateUser, getMyBookingsController);

router.use(userIsLoggedIn);
router.get('/', getToursOverviewController);
router.get('/tour/:tourSlug', getSingleTourController);
router.get('/login', loginController);


module.exports = router;