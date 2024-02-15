const express = require('express');

const router = express.Router();

const Ctrl = require('../controllers');

const { authenticate } = require('../middlewares');

// filters routes
router.get('/categories', authenticate, Ctrl.listCategory);

// router.get('/ingredients', authenticate);

// router.get('/glasses', authenticate);

module.exports = router;
