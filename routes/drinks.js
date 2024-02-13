const express = require("express");

const router = express.Router();

const { validateBody, authenticate, isValidId } = require("../middlewares");

const jsonParser = express.json();

// drinks routes

module.exports = router;
