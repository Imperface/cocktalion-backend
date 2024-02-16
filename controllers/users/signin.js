const { User } = require('../../models/user');
const HttpError = require('../../helpers/HttpError');
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
    console.log('Entered password:', password);
    console.log('User password:', user.password);
    throw HttpError(401, 'Email or password is wrong');
  } else {
    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
    await User.findByIdAndUpdate(user._id, { token });
    res.json({
      token,
    });
  }
};

module.exports = signin;
