const express = require('express');
const router = express.Router();

const {
    exampleMiddleware
} = require('../middlewares');


const {
    signup
} = require('../controllers/auth');


router.post('/signup', signup);


// router
//     .route('/:id')
//     .get(doesTourExist, getSingleTourController)
//     .delete(doesTourExist ,deleteTourController)
//     .patch(doesTourExist, updateTourController);
//
// router
//     .route('/')
//     .get(filterRequestQueryObject, getAllToursController)
//     .post(createTourController);


module.exports = router;