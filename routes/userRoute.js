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


router.post('/signup', signUpController);
router.post('/login', validateUserRequestBody, loginController);
router.post('/forgotPassword', validateUserRequestBody, doesUserExist, forgotPasswordController);
router.patch('/resetPassword/:token', validateUserRequestBody, resetPasswordController);

router.use(authenticateUser);

router.patch('/updateMyPassword', validateUserRequestBody, updatePasswordController);
router.get('/me', getCurrentUser, getSingleUserController);
router.patch('/updateMe', validateUserRequestBody, updateUserController);
router.delete('/deleteMe', deleteUserController);

router.use(authorizeUser('admin'));

router
    .route('/:id')
    .get(getSingleUserController)
    .delete(adminDeleteUserController);

router
    .route('/')
    .get(filterRequestQueryObject, getAllUsersController);



module.exports = router;