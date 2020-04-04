const express = require('express');
const router = express.Router({ mergeParams: true});

const {
    authenticateUser,
    authorizeUser
} = require('../middlewares/auth');


const {
    getAllReviewsController,
    createReviewController,
    updateReviewController,
    deleteReviewController
} = require('../controllers/review');

router
    .route('/:id')
    .patch(authenticateUser, authorizeUser('user'), updateReviewController)
    .delete(authenticateUser, authorizeUser('user'), deleteReviewController);

router
    .route('/')
    .get(getAllReviewsController)
    .post(authenticateUser, authorizeUser('user'), createReviewController);




module.exports = router;