const express = require('express');
const router = express.Router({ mergeParams: true});

const {
    authenticateUser,
    authorizeUser,
    filterRequestQueryObject
} = require('../middlewares');


const {
    getSingleReviewController,
    getAllReviewsController,
    createReviewController,
    updateReviewController,
    deleteReviewController
} = require('../controllers/review');

router
    .route('/:id')
    .get(getSingleReviewController)
    .patch(authenticateUser, authorizeUser('user'), updateReviewController)
    .delete(authenticateUser, authorizeUser('user'), deleteReviewController);

router
    .route('/')
    .get(filterRequestQueryObject, getAllReviewsController)
    .post(authenticateUser, authorizeUser('user'), createReviewController);




module.exports = router;