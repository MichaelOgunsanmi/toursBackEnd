const hashPasswordPreSave = require('./hashPasswordPreSave');
const setPasswordChangeDatePreSave = require('./setPasswordChangeDatePreSave');
const findOnlyActiveUsersPreSave = require('./findOnlyActiveUsersPreSave');


module.exports = {
    hashPasswordPreSave,
    setPasswordChangeDatePreSave,
    findOnlyActiveUsersPreSave
};