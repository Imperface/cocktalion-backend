const express = require('express');

const router = express.Router();

const Ctrl = require ("../controllers");

const { validateBody, authenticate, isValidId } = require('../middlewares');

const jsonParser = express.json();

// drinks routes
router.get('/', authenticate, jsonParser, Ctrl.getFavoriteDrinks);
router.get('/:id', isValidId, Ctrl.getDrinkById);

module.exports = router;
