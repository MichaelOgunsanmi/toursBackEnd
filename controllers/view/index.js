const getSingleTourController = require('./getSingleTour');
const getToursOverviewController = require('./getToursOverview');
const getUserAccountDetailsController = require('./getUserAccountDetails');
const getMyBookingsController = require('./getMyBookings');
const loginController = require('./login');
const alertController = require('./alert');




module.exports = {
    alertController,
    loginController,
    getSingleTourController,
    getToursOverviewController,
    getUserAccountDetailsController,
    getMyBookingsController
};