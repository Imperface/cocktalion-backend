const express = require('express');

const Ctrl = require('../controllers');

const router = express.Router();

const {
  authenticate,
  isValidId,
  validateBody,
  upload,
} = require('../middlewares');
const { schemas } = require('../models/user');

const jsonParser = express.json();

// users routes

router.get('/current', authenticate, Ctrl.getCurrent);

router.post(
  '/signup',
  jsonParser,
  validateBody(schemas.signupSchema),
  Ctrl.signup
);

router.post(
  '/signin',
  jsonParser,
  validateBody(schemas.signinSchema),
  Ctrl.signin
);

router.post('/signout', jsonParser, authenticate, Ctrl.signout);

router.patch(
  '/update',
  authenticate,
  validateBody(schemas.updateSchema),
  upload.single('avatarURL'),
  Ctrl.updateUser
);

module.exports = router;
