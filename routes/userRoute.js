const express = require('express');
const router = express.Router();

const {
    authenticateUser,
    validateUserRequestBody,
    doesUserExist
} = require('../middlewares');


const {
    signUpController,
    loginController,
    forgotPasswordController,
    resetPasswordController,
    updatePasswordController
} = require('../controllers/auth');

const {
    getAllUsersController,
    updateUserController
} = require('../controllers/user');


router.post('/signup', signUpController);
router.post('/login', validateUserRequestBody, loginController);
router.post('/forgotPassword', validateUserRequestBody, doesUserExist, forgotPasswordController);
router.patch('/updateMyPassword', authenticateUser, validateUserRequestBody, updatePasswordController);
router.patch('/resetPassword/:token', validateUserRequestBody, resetPasswordController);
router.patch('/updateMe', authenticateUser, validateUserRequestBody, updateUserController);

// router
//     .route('/:id')
//     .get(doesTourExist, getSingleTourController)
//     .delete(doesTourExist ,deleteTourController)
//     .patch(doesTourExist, updateTourController);
//
router
    .route('/')
    .get(authenticateUser, getAllUsersController);



module.exports = router;