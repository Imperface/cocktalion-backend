const { controllerWrapper } = require('../decorators');
const updatedSubscribe = require('./subscribes/subscribe');

module.exports = {
  updatedSubscribe: controllerWrapper(updatedSubscribe),
};
