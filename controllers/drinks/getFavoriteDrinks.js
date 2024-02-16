const { Drink } = require('../../models/drink');

const getFavoriteDrinks = async (req, res) => {
  const { favorites } = req.query;
  const filter = { owner: req.user._id };

  if (favorites !== undefined) {
    filter.favorites = favorites.toLowerCase() === 'true';
  }

  const result = await Drink.find(filter, '-createdAt -updatedAt').populate('favorites');
  res.json(result);
};

module.exports = getFavoriteDrinks;