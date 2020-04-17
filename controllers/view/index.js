const getSingleTourController = require('./getSingleTour');
const getToursOverviewController = require('./getToursOverview');
const getUserAccountDetailsController = require('./getUserAccountDetails');
const getMyBookingsController = require('./getMyBookings');
const loginController = require('./login');




module.exports = {
    loginController,
    getSingleTourController,
    getToursOverviewController,
    getUserAccountDetailsController,
    getMyBookingsController
};