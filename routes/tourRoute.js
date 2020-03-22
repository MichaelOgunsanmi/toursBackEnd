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
router.get('/:id', doesTourExist, getSingleTourController);
router.get('/', filterRequestQueryObject, getAllToursController);


router.post('/', createTourController);

router.patch('/:id', doesTourExist, updateTourController);

router.delete('/:id', doesTourExist ,deleteTourController);


module.exports = router;