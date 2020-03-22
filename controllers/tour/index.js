const getAllToursController = require('./getAllTours');
const getSingleTourController = require('./getSingleTour');
const getTourStats = require('./getTourStats');
const getMonthlyPlan = require('./getMonthlyPlan');

const createTourController = require('./createTour');

const updateTourController = require('./updateTour');

const deleteTourController = require('./deleteTour');



module.exports = {
    getSingleTourController,
    getAllToursController,
    getTourStats,
    getMonthlyPlan,
    createTourController,
    updateTourController,
    deleteTourController
};