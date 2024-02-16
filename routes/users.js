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
router.post(
  '/signin',
  jsonParser,
  validateBody(schemas.signinSchema),
  controller.signin
);

router.post('/signout', jsonParser, authenticate, controller.signout);

module.exports = router;
