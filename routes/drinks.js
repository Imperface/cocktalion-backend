const express = require('express');

const router = express.Router();

const Ctrl = require('../controllers');

const {
  validateBody,
  authenticate,
  isValidId,
  upload,
} = require('../middlewares');

const jsonParser = express.json();

// drinks routes
const { schemas } = require('../models/drink');
router.get('/', authenticate, jsonParser, Ctrl.getFavoriteDrinks);
router.post(
  '/',
  authenticate,
  validateBody(schemas.drinksAddSchema),
  jsonParser,
  Ctrl.addToFavoritesDrinks
);
router.delete('/:drinkId', authenticate, isValidId, Ctrl.removeFavoritesDrinks);

router.get('/own', authenticate, Ctrl.getDrinksOwner);
router.get('/popular', authenticate, Ctrl.getDrinksPopular);

router.get('/:id', authenticate, isValidId, Ctrl.getDrinkById);

router.post(
  '/own/add',
  authenticate,
  upload.single('drinkAvatar'),
  validateBody(schemas.drinksAddSchema),
  Ctrl.addDrink
);
router.delete(
  '/own/remove/:id',
  authenticate,
  isValidId,
  Ctrl.removeOwnerDrinksById
);

module.exports = router;
