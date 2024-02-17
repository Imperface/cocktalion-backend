const { Ingredient } = require('../../models/ingredient');

const listIngredients = async (req, res) => {
  const ingredients = await Ingredient.find({});

  res.status(200).json({ ingredients: ingredients });
};

module.exports = listIngredients;
