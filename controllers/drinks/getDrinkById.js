const { Drink } = require('../../models/drink');
const { HttpError } = require('../../helpers');

const getDrinkById = async (req, res) => {
  const drink = await Drink.findById(req.params.id);

  if (drink === null) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json(drink);
};
module.exports = getDrinkById;
