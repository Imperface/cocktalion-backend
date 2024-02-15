const controllerWrapper = require('../decorators/controllerWrapper');
const getCurrent = require('./users/getCurrent');

module.exports = {
  getCurrent: controllerWrapper(getCurrent),
};
