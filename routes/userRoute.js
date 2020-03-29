const express = require('express');
const router = express.Router();

const {
    authenticateUser,
    doesUserExist
} = require('../middlewares');


const {
    signUpController,
    loginController
} = require('../controllers/auth');

const {
    getAllUsersController,
    forgotPasswordController,
    resetPasswordController
} = require('../controllers/user');


router.post('/signup', signUpController);
router.post('/login', loginController);

router.post('/forgotPassword', doesUserExist, forgotPasswordController);
router.patch('/resetPassword/:token', resetPasswordController);


// router
//     .route('/:id')
//     .get(doesTourExist, getSingleTourController)
//     .delete(doesTourExist ,deleteTourController)
//     .patch(doesTourExist, updateTourController);
//
router
    .route('/')
    .get(authenticateUser, getAllUsersController);
    // .post(createTourController);


module.exports = router;