const express = require('express');
const controller = require('../controllers/index');

const router = express.Router();

const { authenticate, isValidId } = require('../middlewares');

const jsonParser = express.json();

// users routes

router.get('/current', authenticate, controller.getCurrent);

module.exports = router;
