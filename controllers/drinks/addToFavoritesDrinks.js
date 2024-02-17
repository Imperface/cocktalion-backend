const { Drink } = require('../../models/drink');
const { HttpError } = require('../../helpers');

const addToFavoritesDrinks = async (req, res) => {
  // get params from body
  const { _id } = req.body;

  // get id from user
  const { _id: userId, email } = req.user;

  // looking for drink in db
  const drink = await Drink.findOne({ _id });

  // throw error if drink not found
  if (!drink) {
    throw HttpError(404, 'Not found');
  }

  // get drink favorites
  const { favorites } = drink;

  // find userId in favorites
  const checkDuplicate = favorites.find(
    item => String(item._id) === String(userId)
  );

  // throw error if userId found
  if (checkDuplicate !== undefined) {
    throw HttpError(409, 'The drink has already been added to favorites');
  }

  // push userId to favorites array
  const addToFavorite = await Drink.findByIdAndUpdate(
    _id,
    { $push: { favorites: { _id: userId, email } } },
    { new: true }
  );

  res
    .status(200)
    .json({ message: 'Drink added to favorites', drink: addToFavorite });
};

module.exports = addToFavoritesDrinks;
