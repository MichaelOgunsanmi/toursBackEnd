const express = require('express');
const router = express.Router();

const {
    authenticateUser,
    authorizeUser,
    validateUserRequestBody,
    doesUserExist,
    getCurrentUser,
    filterRequestQueryObject
} = require('../middlewares');


const {
    signUpController,
    loginController,
    forgotPasswordController,
    resetPasswordController,
    updatePasswordController
} = require('../controllers/auth');

const {
    getSingleUserController,
    getAllUsersController,
    updateUserController,
    deleteUserController,
    adminDeleteUserController
} = require('../controllers/user');


router.get('/me', authenticateUser, getCurrentUser, getSingleUserController);
router.post('/signup', signUpController);
router.post('/login', validateUserRequestBody, loginController);
router.post('/forgotPassword', validateUserRequestBody, doesUserExist, forgotPasswordController);
router.patch('/updateMyPassword', authenticateUser, validateUserRequestBody, updatePasswordController);
router.patch('/resetPassword/:token', validateUserRequestBody, resetPasswordController);
router.patch('/updateMe', authenticateUser, validateUserRequestBody, updateUserController);
router.delete('/deleteMe', authenticateUser, deleteUserController);


router
    .route('/:id')
    .get(getSingleUserController)
    .delete(authenticateUser, authorizeUser('admin'), adminDeleteUserController);


router
    .route('/')
    .get(filterRequestQueryObject, authenticateUser, getAllUsersController);



module.exports = router;