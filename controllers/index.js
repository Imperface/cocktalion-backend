const controllerWrapper = require('../decorators/controllerWrapper');
const getCurrent = require('./users/getCurrent');
const updateUser = require('./users/updateUser');

module.exports = {
  getCurrent: controllerWrapper(getCurrent),
  updateUser: controllerWrapper(updateUser),
};
