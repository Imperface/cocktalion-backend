
const { controllerWrapper } = require('../decorators');

const listCategory = require('./filters/categories');
const updatedSubscribe = require('./subscribes/subscribe');
// const getDrinksOwner = require('./drinks/getDrinksOwner');
const getDrinkById = require ("./drinks/getDrinkById.js");
const getDrinksPopular = require ('./drinks/getDrinksPopular.js')


module.exports = {
  updatedSubscribe: controllerWrapper(updatedSubscribe),
  listCategory: controllerWrapper(listCategory),
  // getDrinksOwner: controllerWrapper(getDrinksOwner),
  getDrinkById: controllerWrapper(getDrinkById),
  getDrinksPopular:controllerWrapper(getDrinksPopular),
};

