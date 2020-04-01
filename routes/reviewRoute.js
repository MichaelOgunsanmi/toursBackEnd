const express = require('express');
const router = express.Router();

const exampleMiddleware = require('../middlewares/exampleMiddleware');


const {
    getAllReviewsController,
    createReviewController
} = require('../controllers/review');


router
    .route('/')
    .get(getAllReviewsController)
    .post(createReviewController);


module.exports = router;