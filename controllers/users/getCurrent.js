const { HttpError } = require('../../helpers');

const getCurrent = async (req, res) => {
  const { name, email, dateOfBirth, avatarURL } = req.user;

  if (!email) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json({ name, email, dateOfBirth, avatarURL });
};

module.exports = getCurrent;
