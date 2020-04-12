const validateUserRequestBody = require('./validateUserRequestBody');
const uploadUserPhoto = require('./uploadUserPhoto');
const doesUserExist = require('./doesUserExist');
const getCurrentUser = require('./getCurrentUser');



module.exports = {
    validateUserRequestBody,
    uploadUserPhoto,
    doesUserExist,
    getCurrentUser
};