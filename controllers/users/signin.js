const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const payload = {
    _id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      _id: user._id,
      email,
      name: user.name,
      avatarUrl: user.avatarURL,
    },
  });
};

module.exports = signin;
