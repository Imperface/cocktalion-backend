const express = require('express');

const router = express.Router();

const ctrl = require('../controllers');

const { authenticate } = require('../middlewares');

// filters routes
router.get('/categories', authenticate, ctrl.listCategory);

router.get('/ingredients', authenticate);

router.get('/glasses', authenticate);

module.exports = router;
