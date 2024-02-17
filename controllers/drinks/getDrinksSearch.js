const { Drink } = require('../../models/drink');
const { isAdult } = require('../../helpers');

const getDrinksSearch = async (req, res) => {
  const { dateOfBirth } = req.user;
  const { category, ingredientId, query, page = 1, limit = 10 } = req.query;
  const paramSearch = {};

  const skip = (page - 1) * limit;

  if (category) {
    paramSearch.category = category;
  }
  if (ingredientId) {
    paramSearch.ingredients = { $elemMatch: { ingredientId } };
  }
  if (query) {
    paramSearch.drink = { $regex: query, $options: 'i' };
  }

  if (!isAdult(dateOfBirth)) {
    paramSearch.alcoholic = 'Non alcoholic';
  }

  const resultCount = await Drink.countDocuments(paramSearch);

  const drinks = await Drink.find(paramSearch, {}, { skip, limit });

  res.status(200).json({
    message: 'Success operation',
    quantityTotal: resultCount,
    drinks,
  });
};

module.exports = getDrinksSearch;
