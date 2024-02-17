const { Drink } = require('../../models/drink');

const getFavoriteDrinks = async (req, res) => {
  // get params from user
  const { _id, email } = req.user;

  // looking for a drink that has _id and email in favorites
  const drinks = await Drink.find({ favorites: { _id, email } });

  res.status(200).json({ drinks });
};

module.exports = getFavoriteDrinks;
