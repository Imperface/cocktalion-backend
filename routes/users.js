const express = require('express');
const controller = require('../controllers/index');

const router = express.Router();

const { authenticate, isValidId, validateBody } = require('../middlewares');
const { schemas } = require('../models/user');

const jsonParser = express.json();

// users routes

router.get('/current', authenticate, controller.getCurrent);
router.post(
  '/signup',
  jsonParser,
  validateBody(schemas.signupSchema),
  controller.signup
);

module.exports = router;
