const { controllerWrapper } = require('../decorators');

const listCategory = require('./filters/categories');
const updatedSubscribe = require('./subscribes/subscribe');

module.exports = {
  updatedSubscribe: controllerWrapper(updatedSubscribe),
  listCategory: controllerWrapper(listCategory),
};
