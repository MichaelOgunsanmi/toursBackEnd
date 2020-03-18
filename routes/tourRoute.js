const express = require('express');
const router = express.Router();

const {
    exampleMiddleware,
    filterRequestQueryObject
} = require('../middlewares');


const {
    getSingleTourController,
    getAllToursController,
    createTourController,
    updateTourController,
    deleteTourController
} = require('../controllers/tour');


router.get('/:id', getSingleTourController);
router.get('/', filterRequestQueryObject, getAllToursController);

router.post('/', createTourController);

router.patch('/:id', updateTourController);

router.delete('/:id', deleteTourController);


module.exports = router;