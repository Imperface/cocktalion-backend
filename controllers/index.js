const { controllerWrapper } = require('../decorators');

const listCategory = require('./filters/categories');
const listGlasses = require('./filters/glasses');
const updatedSubscribe = require('./subscribes/subscribe');

const getDrinksPopular = require('./drinks/getDrinksPopular.js');
const getDrinkById = require('./drinks/getDrinkById.js');
const getCurrent = require('./users/getCurrent');
const getFavoriteDrinks = require('./drinks/getFavoriteDrinks');

const addToFavoritesDrinks = require('./drinks/addToFavoritesDrinks');
const removeFavoritesDrinks = require('./drinks/removeFavoritesDrinks');


const signup = require('./users/signup');

const addToFavoritesDrinks = require('./drinks/addToFavoritesDrinks')



module.exports = {
  updatedSubscribe: controllerWrapper(updatedSubscribe),
  listCategory: controllerWrapper(listCategory),
  listGlasses: controllerWrapper(listGlasses),
  getDrinkById: controllerWrapper(getDrinkById),
  getCurrent: controllerWrapper(getCurrent),

  getFavoriteDrinks: controllerWrapper(getFavoriteDrinks),


  getDrinksPopular: controllerWrapper(getDrinksPopular),

  signup: controllerWrapper(signup),

  getDrinksPopular:controllerWrapper(getDrinksPopular),
  addToFavoritesDrinks: controllerWrapper(addToFavoritesDrinks),

  removeFavoritesDrinks: controllerWrapper(removeFavoritesDrinks),

};
