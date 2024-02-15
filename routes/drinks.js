const express = require('express');

const router = express.Router();

const Ctrl = require ("../controllers");

const { validateBody, authenticate, isValidId } = require('../middlewares');

const jsonParser = express.json();

const Ctrl = require('../controllers');


// drinks routes

router.get('/own', Ctrl.getDrinkOwner)

router.get('/:id', isValidId, Ctrl.getDrinkById);


module.exports = router;
