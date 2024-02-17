const { Drink } = require('../../models/drink');
const { HttpError } = require('../../helpers');

const removeFavoritesDrinks = async (req, res) => {
  const { id } = req.params;

  const { _id: userId } = req.user;

  // looking for drink in db
  const drink = await Drink.findOne({ _id: id });

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

  // throw error if userId not found
  if (checkDuplicate === undefined) {
    throw HttpError(404, 'Drink is not in the user favorites list');
  }

  const result = await Drink.findByIdAndUpdate(
    id,
    {
      $pull: { favorites: { _id: userId } },
    },
    { new: true }
  );

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json({
    message: 'Favorites deleted',
    drink: result,
  });
};

module.exports = removeFavoritesDrinks;
