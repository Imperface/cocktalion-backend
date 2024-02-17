const { Ingredient } = require('../../models/ingredient');

const listIngredients = async (req, res) => {
  const ingredients = await Ingredient.find(
    {},
    '_id title ingredientThumb thumb-medium thumb-small'
  );

  res.status(200).json({ ingredients });
};

module.exports = listIngredients;
