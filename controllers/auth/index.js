const signUpController = require('./signUp');
const loginController = require('./login');
const forgotPasswordController = require('./forgotPassword');
const resetPasswordController = require('./resetPassword');
const updatePasswordController = require('./updatePassword');



module.exports = {
    signUpController,
    loginController,
    forgotPasswordController,
    resetPasswordController,
    updatePasswordController
};