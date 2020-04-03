const express = require('express');
const router = express.Router();

const {
    authenticateUser,
    authorizeUser,
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
    updateUserController,
    deleteUserController,
    adminDeleteUserController
} = require('../controllers/user');


router.post('/signup', signUpController);
router.post('/login', validateUserRequestBody, loginController);
router.post('/forgotPassword', validateUserRequestBody, doesUserExist, forgotPasswordController);
router.patch('/updateMyPassword', authenticateUser, validateUserRequestBody, updatePasswordController);
router.patch('/resetPassword/:token', validateUserRequestBody, resetPasswordController);
router.patch('/updateMe', authenticateUser, validateUserRequestBody, updateUserController);
router.delete('/deleteMe', authenticateUser, deleteUserController);


router
    .route('/:id')
    .delete(authenticateUser, authorizeUser('admin'), adminDeleteUserController);


router
    .route('/')
    .get(authenticateUser, getAllUsersController);



module.exports = router;