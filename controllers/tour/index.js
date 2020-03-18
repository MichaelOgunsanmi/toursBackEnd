const getAllToursController = require('./getAllTours');
const getSingleTourController = require('./getSingleTour');

const createTourController = require('./createTour');

const updateTourController = require('./updateTour');

const deleteTourController = require('./deleteTour');



module.exports = {
    getSingleTourController,
    getAllToursController,
    createTourController,
    updateTourController,
    deleteTourController
};