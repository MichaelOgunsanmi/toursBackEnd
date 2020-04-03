const express = require('express');
const router = express.Router({ mergeParams: true});

const {
    authenticateUser,
    authorizeUser
} = require('../middlewares/auth');


const {
    getAllReviewsController,
    createReviewController,
    deleteReviewController
} = require('../controllers/review');



router
    .route('/')
    .get(getAllReviewsController)
    .post(authenticateUser, authorizeUser('user'), createReviewController);

router
    .route('/:id')
    .delete(authenticateUser, authorizeUser('user'), deleteReviewController);


module.exports = router;