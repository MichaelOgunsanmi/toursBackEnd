const express = require('express');
const router = express.Router();

const {
    exampleMiddleware,
    filterRequestQueryObject,
    filterForTop5RatedTours,
    doesTourExist
} = require('../middlewares');


const {
    getSingleTourController,
    getAllToursController,
    getTourStats,
    getMonthlyPlan,
    createTourController,
    updateTourController,
    deleteTourController
} = require('../controllers/tour');


router.get('/top-5-cheap', filterForTop5RatedTours, getAllToursController);
router.get('/tour-stats', getTourStats);
router.get('/monthly-plan/:year', getMonthlyPlan);

router
    .route('/:id')
    .get(doesTourExist, getSingleTourController)
    .delete(doesTourExist ,deleteTourController)
    .patch(doesTourExist, updateTourController);

router
    .route('/')
    .get(filterRequestQueryObject, getAllToursController)
    .post(createTourController);





module.exports = router;