const { Drink } = require('../../models/drink');
const { HttpError } = require('../../helpers');

const removeFavoritesDrinks = async (req, res) => {
  const { drinkId } = req.params;

  const result = await Drink.findByIdAndUpdate(drinkId, {
    $pull: { favorites: req.user._id },
  });

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json({
    message: 'Favorites deleted',
  });
};

module.exports = removeFavoritesDrinks;
