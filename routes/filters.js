const express = require('express');

const router = express.Router();

const Ctrl = require('../controllers');

const { authenticate } = require('../middlewares');

// filters routes
router.get('/categories', authenticate, Ctrl.listCategory);

router.get('/glasses', authenticate, Ctrl.listGlasses);

// router.get('/ingredients', authenticate);

module.exports = router;
