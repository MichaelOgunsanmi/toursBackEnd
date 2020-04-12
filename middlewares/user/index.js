const validateUserRequestBody = require('./validateUserRequestBody');
const uploadUserPhoto = require('./uploadUserPhoto');
const resizeUserPhoto = require('./resizeUserPhoto');
const doesUserExist = require('./doesUserExist');
const getCurrentUser = require('./getCurrentUser');



module.exports = {
    validateUserRequestBody,
    uploadUserPhoto,
    resizeUserPhoto,
    doesUserExist,
    getCurrentUser
};