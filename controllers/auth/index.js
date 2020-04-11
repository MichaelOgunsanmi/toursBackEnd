const signUpController = require('./signUp');
const loginController = require('./login');
const logoutController = require('./logout');
const forgotPasswordController = require('./forgotPassword');
const resetPasswordController = require('./resetPassword');
const updatePasswordController = require('./updatePassword');



module.exports = {
    signUpController,
    loginController,
    logoutController,
    forgotPasswordController,
    resetPasswordController,
    updatePasswordController
};