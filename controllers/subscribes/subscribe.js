const { Subscribe } = require('../../models/subscribe');
const { HttpError } = require('../../helpers');

const updatedSubscribe = async (req, res) => {
  const { email } = req.body;

  // get user id from req.user
  const { _id } = req.user;

  // looking for duplicate email
  const checkDuplicate = await Subscribe.findOne({ email });

  // throw error if email found
  if (checkDuplicate !== null) {
    throw HttpError(409, 'Email already subscribed');
  }

  const result = await Subscribe.create({ email, addedBy: _id });

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.status(201).json({
    user: {
      email: result.email,
      subscribe: result.subscribe,
      addedBy: _id,
    },
  });
};

module.exports = updatedSubscribe;
