const hashPasswordPreSave = require('./hashPasswordPreSave');
const setPasswordChangeDatePreSave = require('./setPasswordChangeDatePreSave');
const findOnlyActiveUsers = require('./findOnlyActiveUsers');


module.exports = {
    hashPasswordPreSave,
    setPasswordChangeDatePreSave,
    findOnlyActiveUsers
};