const express = require('express');
const router = express.Router();

const {
    userIsLoggedIn
} = require('../middlewares/auth');

const {
    loginController,
    getSingleTourController,
    getToursOverviewController
} = require('../controllers/view');


router.use(userIsLoggedIn);

router.get('/', getToursOverviewController);
router.get('/tour/:tourSlug', getSingleTourController);
router.get('/login', loginController);


module.exports = router;