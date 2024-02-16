const { controllerWrapper } = require('../decorators');

const listCategory = require('./filters/categories');
const listGlasses = require('./filters/glasses');
const updatedSubscribe = require('./subscribes/subscribe');

const getDrinksPopular = require('./drinks/getDrinksPopular.js');
const getDrinkById = require('./drinks/getDrinkById.js');
const getDrinksOwner = require('./drinks/getDrinksOwner.js')
const getCurrent = require('./users/getCurrent');
const getFavoriteDrinks = require('./drinks/getFavoriteDrinks');

const addToFavoritesDrinks = require('./drinks/addToFavoritesDrinks');
const removeFavoritesDrinks = require('./drinks/removeFavoritesDrinks');


const signup = require('./users/signup');
const signin = require('./users/signin');
const signout = require('./users/signout');

const removeOwnerDrinksById = require('./drinks/removeOwnerDrinksById')


module.exports = {
  signup: controllerWrapper(signup),
  signin: controllerWrapper(signin),
  signout: controllerWrapper(signout),

  updatedSubscribe: controllerWrapper(updatedSubscribe),
  listCategory: controllerWrapper(listCategory),
  listGlasses: controllerWrapper(listGlasses),
  getDrinkById: controllerWrapper(getDrinkById),
  getCurrent: controllerWrapper(getCurrent),

  getFavoriteDrinks: controllerWrapper(getFavoriteDrinks),

  getDrinksOwner: controllerWrapper(getDrinksOwner),
  getDrinksPopular: controllerWrapper(getDrinksPopular),
  addToFavoritesDrinks: controllerWrapper(addToFavoritesDrinks),

  removeFavoritesDrinks: controllerWrapper(removeFavoritesDrinks),

  
  removeOwnerDrinksById: controllerWrapper(removeOwnerDrinksById)

};
