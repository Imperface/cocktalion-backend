const { controllerWrapper } = require('../decorators');

const listCategory = require('./filters/categories');
const updatedSubscribe = require('./subscribes/subscribe');
const getDrinkById = require('./drinks/getDrinkById.js');
const getCurrent = require('./users/getCurrent');

module.exports = {
  updatedSubscribe: controllerWrapper(updatedSubscribe),
  listCategory: controllerWrapper(listCategory),
  getDrinkById: controllerWrapper(getDrinkById),
  getCurrent: controllerWrapper(getCurrent),
};
