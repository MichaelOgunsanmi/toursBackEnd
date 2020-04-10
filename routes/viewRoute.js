const express = require('express');
const router = express.Router();

const {
    getSingleTourController,
    getToursOverviewController
} = require('../controllers/view');


router.get('/', getToursOverviewController);
router.get('/tour/:tourSlug', getSingleTourController);


module.exports = router;