const express = require('express');

const router = express.Router();

const Ctrl = require ("../controllers");

const { validateBody, authenticate, isValidId } = require('../middlewares');

const jsonParser = express.json();



// drinks routes
const { schemas } = require('../models/subscribe');
router.get('/', authenticate, jsonParser, Ctrl.getFavoriteDrinks);
router.post('/', authenticate, validateBody(schemas.drinksAddSchema), jsonParser, Ctrl.addToFavoritesDrinks);

// router.get('/own', Ctrl.getDrinksOwner);
router.get('/popular', Ctrl.getDrinksPopular);


router.get('/:id', isValidId, Ctrl.getDrinkById);

module.exports = router;
