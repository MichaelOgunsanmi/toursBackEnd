const express = require('express');
const router = express.Router();

const {
    exampleMiddleware,
    filterRequestQueryObject,
    filterForTop5RatedTours,
    doesTourExist,
    authenticateUser,
    authorizeUser
} = require('../middlewares');


const {
    getSingleTourController,
    getAllToursController,
    getTourStatsController,
    getMonthlyPlanController,
    getToursWithin,
    createTourController,
    updateTourController,
    deleteTourController
} = require('../controllers/tour');

const reviewRouter = require('./reviewRoute');
router.use('/:tourId/reviews', reviewRouter);


router.get('/top-5-cheap', filterForTop5RatedTours, getAllToursController);
router.get('/tour-stats', getTourStatsController);
router.get('/monthly-plan/:year', authenticateUser, authorizeUser('admin', 'lead-guide', 'guide'), getMonthlyPlanController);
router.get('/tours-within/:radius/center/:latitudeLongitude/unit/:unit', getToursWithin);

router
    .route('/:id')
    .get(getSingleTourController)
    .patch(authenticateUser, authorizeUser('admin', 'lead-guide'), doesTourExist, updateTourController)
    .delete(authenticateUser, authorizeUser('admin', 'lead-guide'), doesTourExist ,deleteTourController);

router
    .route('/')
    .get(filterRequestQueryObject, getAllToursController)
    .post(authenticateUser, authorizeUser('admin', 'lead-guide'), createTourController);





module.exports = router;