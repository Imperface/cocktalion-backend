const { HttpError } = require('../../helpers');

const getCurrent = async (req, res) => {
  const { email } = req.user;

  if (!email) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json({ email });
};

module.exports = getCurrent;
