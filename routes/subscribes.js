const express = require('express');

const router = express.Router();

const { authenticate } = require('../middlewares');

// subscribe routes
const { schemas } = require('../models/subscribe');
const Ctrl = require('../controllers');
const { validateBody } = require('../middlewares');
const jsonParser = express.json();

router.post(
  '/',
  authenticate,
  jsonParser,
  validateBody(schemas.joiSubscribeSchema),
  Ctrl.updatedSubscribe
);

module.exports = router;
