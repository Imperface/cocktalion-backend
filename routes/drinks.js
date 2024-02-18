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
router.get('/favorite', authenticate, Ctrl.getFavoriteDrinks);
router.post(
  '/favorite/add',
  authenticate,
  jsonParser,
  validateBody(schemas.drinkAddFavoriteSchema),
  Ctrl.addToFavoritesDrinks
);
router.delete(
  '/favorite/remove/:id',
  authenticate,
  isValidId,
  Ctrl.removeFavoritesDrinks
);

router.get('/own', authenticate, Ctrl.getDrinksOwner);
router.get('/popular', authenticate, Ctrl.getDrinksPopular);

router.get('/main-page', authenticate, Ctrl.getAllDrinks);
router.get('/search', authenticate, Ctrl.getDrinksSearch);

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
