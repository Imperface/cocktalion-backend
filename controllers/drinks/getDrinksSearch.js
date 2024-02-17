const { Drink } = require('../../models/drink');
const { isAdult, HttpError } = require('../../helpers');

const getDrinksSearch = async (req, res) => {
  const { category, ingredient, query, page = 1, limit = 10 } = req.query;
  const paramSearch = {};

  const skip = (page - 1) * limit;

  if (category) {
    paramSearch.category = category;
  }
  if (ingredient) {
    paramSearch.ingredients = { $elemMatch: { title: ingredient } };
  }
  if (query) {
    paramSearch.drink = { $regex: query, $options: 'i' };
  }
  if (!isAdult) {
    paramSearch.alcoholic = 'Non alcoholic';
  }

  const resultCount = await Drink.countDocuments(paramSearch);

  const drinks = await Drink.find(
    paramSearch,
    'drink drinkThumb category alcoholic popularity',
    { skip, limit }
  ).sort({ popularity: -1 });

  if (!resultCount || !drinks.length) {
    throw HttpError(404, 'Not Found');
  }

  res.status(200).json({
    code: 200,
    message: 'Success operation',
    quantityTotal: resultCount,
    data: drinks,
  });
};

module.exports = getDrinksSearch;
