const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');
const { DEFAULT_USER_AVATAR } = require('../../constants');

const bcrypt = require('bcrypt');

const signup = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = DEFAULT_USER_AVATAR;

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    user: {
      email,
      avatarURL,
    },
  });
};

module.exports = signup;
