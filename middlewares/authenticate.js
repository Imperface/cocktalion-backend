const { User } = require('../models/user');

const jwt = require('jsonwebtoken');

const { HttpError } = require('../helpers');

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  // get authenticate token from request headers
  const { authorization = '' } = req.headers;

  // split authenticate token
  const [bearer, token] = authorization.split(' ');

  // send error if bearer !== 'Bearer'
  if (bearer !== 'Bearer' || !token) {
    next(HttpError(401, 'Not authorized'));
    return;
  }

  try {
    // get user _id from token
    const { _id } = jwt.verify(token, SECRET_KEY);

    // looking for user by user _id
    const user = await User.findOne({ _id });

    // send error if user not found
    // send error if token is empty
    // send error if user token not match token from request
    if (user === null || user.token === '' || user.token !== token) {
      next(HttpError(401, 'Not authorized'));
      return;
    }

    // save user data in request
    req.user = user;

    next();
  } catch (error) {
    next(HttpError(401, 'Not authorized'));
    return;
  }
};

module.exports = authenticate;
