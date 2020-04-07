const getAllToursController = require('./getAllTours');
const getSingleTourController = require('./getSingleTour');
const getTourStatsController = require('./getTourStats');
const getMonthlyPlanController = require('./getMonthlyPlan');
const getToursWithinController = require('./getToursWithin');
const getToursDistancesController = require('./getToursDistances');

const createTourController = require('./createTour');

const updateTourController = require('./updateTour');

const deleteTourController = require('./deleteTour');



module.exports = {
    getSingleTourController,
    getAllToursController,
    getTourStatsController,
    getMonthlyPlanController,
    getToursWithinController,
    getToursDistancesController,
    createTourController,
    updateTourController,
    deleteTourController
};