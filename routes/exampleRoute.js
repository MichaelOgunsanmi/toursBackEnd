const express = require('express');
const router = express.Router();

const exampleMiddleware = require('../middlewares/exampleMiddleware');


const {exampleController} = require('../controllers/exampleController');



router.get('/endpoint', exampleMiddleware, exampleController);


module.exports = router;