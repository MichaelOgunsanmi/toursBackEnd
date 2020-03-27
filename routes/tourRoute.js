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
    createTourController,
    updateTourController,
    deleteTourController
} = require('../controllers/tour');


router.get('/top-5-cheap', filterForTop5RatedTours, getAllToursController);
router.get('/tour-stats', getTourStatsController);
router.get('/monthly-plan/:year', getMonthlyPlanController);

router
    .route('/:id')
    .get(doesTourExist, getSingleTourController)
    .delete(authenticateUser, authorizeUser('admin', 'lead-guide'), doesTourExist ,deleteTourController)
    .patch(doesTourExist, updateTourController);

router
    .route('/')
    .get(filterRequestQueryObject, getAllToursController)
    .post(createTourController);





module.exports = router;