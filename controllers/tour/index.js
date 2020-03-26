const getAllToursController = require('./getAllTours');
const getSingleTourController = require('./getSingleTour');
const getTourStatsController = require('./getTourStats');
const getMonthlyPlanController = require('./getMonthlyPlan');

const createTourController = require('./createTour');

const updateTourController = require('./updateTour');

const deleteTourController = require('./deleteTour');



module.exports = {
    getSingleTourController,
    getAllToursController,
    getTourStatsController,
    getMonthlyPlanController,
    createTourController,
    updateTourController,
    deleteTourController
};