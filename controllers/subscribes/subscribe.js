const { Subscribe } = require('../../models/subscribe');
const { HttpError } = require('../../helpers');

const updatedSubscribe = async (req, res) => {
  const { email } = req.body;

  const result = await Subscribe.create({ email });

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.status(201).json({
    user: {
      email: result.email,
      subscribe: result.subscribe,
    },
  });
};

module.exports = updatedSubscribe;
