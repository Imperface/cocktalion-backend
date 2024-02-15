const {controllerWrapper} = require ('../decorators');

const getDrinkById = require ("./drinks/getDrinkById.js")

module.exports = {
    getDrinkById: controllerWrapper(getDrinkById),
}