const express = require('express');
const router = express.Router();

const {
    loginController,
    getSingleTourController,
    getToursOverviewController
} = require('../controllers/view');


router.get('/', getToursOverviewController);
router.get('/tour/:tourSlug', getSingleTourController);
router.get('/login', loginController);


module.exports = router;