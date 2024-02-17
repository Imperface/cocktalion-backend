const express = require('express');

import drinksController from '../controllers/drinks/getAllDrinks';

const router = express.Router();

const { validateBody, authenticate, isValidId } = require('../middlewares');

const jsonParser = express.json();

// main page get all drink route
drinksRouter.get('/main-page', drinksController.getAllDrinks);

module.exports = drinksRouter;
