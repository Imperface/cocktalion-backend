const express = require("express");

const router = express.Router();

const { validateBody, authenticate, isValidId } = require("../middlewares");

const jsonParser = express.json();

// users routes

module.exports = router;
