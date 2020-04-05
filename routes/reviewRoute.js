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

router.use(authenticateUser);

router
    .route('/:id')
    .get(getSingleReviewController)
    .patch(authorizeUser('user', 'admin'), updateReviewController)
    .delete(authorizeUser('user', 'admin'), deleteReviewController);

router
    .route('/')
    .get(filterRequestQueryObject, getAllReviewsController)
    .post(authorizeUser('user'), createReviewController);




module.exports = router;