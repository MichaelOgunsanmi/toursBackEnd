const express = require('express');
const router = express.Router();

const {
    userIsLoggedIn,
    authenticateUser
} = require('../middlewares/auth');

const {
    exampleController
} = require('../controllers/booking');





module.exports = router;