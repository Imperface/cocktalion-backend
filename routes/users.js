const express = require('express');

const router = express.Router();

const { validateBody, authenticate, isValidId } = require('../middlewares');

const { schemas } = require('../models/user');
const ctrl = require('../controllers/users/.gitkeep');

const jsonParser = express.json();

// users routes
router.post('/signup', validateBody(schemas.signupSchema), ctrl.signup);
router.post('/signin', validateBody(schemas.signinSchema), ctrl.signin);
router.post('/signout', authenticate, ctrl.signout);

module.exports = router;
