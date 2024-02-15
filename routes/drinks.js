const express = require('express');

const router = express.Router();

const { validateBody, authenticate, isValidId } = require('../middlewares');

const jsonParser = express.json();

const Ctrl = require('../controllers');


// drinks routes
router.get('/own', Ctrl.getDrinkOwner)

module.exports = router;
