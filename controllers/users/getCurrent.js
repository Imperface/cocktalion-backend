const { HttpError } = require('../../helpers');

const getCurrent = async (req, res) => {
  const { name, email, dateOfBirth, avatarURL, _id } = req.user;

  if (!email) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json({ name, email, dateOfBirth, avatarURL, _id });
};

module.exports = getCurrent;
