const express = require('express');

const router = express.Router();

const Ctrl = require ("../controllers");

const { validateBody, authenticate, isValidId } = require('../middlewares');

const jsonParser = express.json();



// drinks routes
const { schemas } = require('../models/subscribe');
router.get('/', authenticate, jsonParser, Ctrl.getFavoriteDrinks);
router.post('/', authenticate, validateBody(schemas.drinksAddSchema), jsonParser, Ctrl.addToFavoritesDrinks);
router.delete('/:drinkId', authenticate, isValidId, Ctrl.removeFavoritesDrinks);

router.get('/own', authenticate, Ctrl.getDrinksOwner);
router.get('/popular', Ctrl.getDrinksPopular);


router.get('/:id', isValidId, Ctrl.getDrinkById);

router.delete('/own/remove/:id', authenticate, isValidId, Ctrl.removeOwnerDrinksById )

module.exports = router;
