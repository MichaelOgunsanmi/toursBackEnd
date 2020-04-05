const getSingleUserController = require('./getSingleUser');
const getAllUsersController = require('./getAllUsers');
const updateUserController = require('./updateUser');
const deleteUserController = require('./deleteUser');
const adminDeleteUserController = require('./adminDeleteUser');



module.exports = {
    getSingleUserController,
    getAllUsersController,
    updateUserController,
    deleteUserController,
    adminDeleteUserController
};