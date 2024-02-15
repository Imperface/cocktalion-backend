const { listCategory } = require('./filters');
const { controllerWrapper } = require('../decorators');
const updatedSubscribe = require('./subscribes/subscribe');
const listCategory = require('./filters/listCategory');
module.exports = {
  updatedSubscribe: controllerWrapper(updatedSubscribe),
  listCategory: controllerWrapper(listCategory),
};
