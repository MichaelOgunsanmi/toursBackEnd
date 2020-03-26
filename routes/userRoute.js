const express = require('express');
const router = express.Router();

const {
    exampleMiddleware
} = require('../middlewares');


const {
    signUpController,
    loginController
} = require('../controllers/auth');

const {
    getAllUsersController
} = require('../controllers/user');


router.post('/signup', signUpController);
router.post('/login', loginController);


// router
//     .route('/:id')
//     .get(doesTourExist, getSingleTourController)
//     .delete(doesTourExist ,deleteTourController)
//     .patch(doesTourExist, updateTourController);
//
router
    .route('/')
    .get(getAllUsersController)
    // .post(createTourController);


module.exports = router;