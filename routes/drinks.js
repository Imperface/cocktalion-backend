const express = require('express');

const router = express.Router();

const controllers = require ("../controllers");

const { validateBody, authenticate, isValidId } = require('../middlewares');

const jsonParser = express.json();

// drinks routes
router.get('/:id', isValidId, controllers.getById);

module.exports = router;
