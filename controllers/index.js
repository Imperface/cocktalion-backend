const { controllerWrapper } = require('../decorators');

const listCategory = require('./filters/categories');
const listGlasses = require('./filters/glasses');
const updatedSubscribe = require('./subscribes/subscribe');
const getDrinkById = require('./drinks/getDrinkById.js');
const getCurrent = require('./users/getCurrent');
const getFavoriteDrinks = require('./drinks/getFavoriteDrinks');

module.exports = {
  updatedSubscribe: controllerWrapper(updatedSubscribe),
  listCategory: controllerWrapper(listCategory),
  listGlasses: controllerWrapper(listGlasses),
  getDrinkById: controllerWrapper(getDrinkById),
  getCurrent: controllerWrapper(getCurrent),
  getFavoriteDrinks: controllerWrapper(getFavoriteDrinks),
};
