const { User } = require('../models/user');

const jwt = require('jsonwebtoken');

const { HttpError } = require('../helpers');

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {};

module.exports = authenticate;
