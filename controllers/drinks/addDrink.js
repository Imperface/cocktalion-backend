const { Drink } = require('../../models/drink');
const { isAdult, HttpError } = require('../../helpers');

const drinkAdd = async (req, res, next) => {
  // get user from req
  const { user } = req;

  // get data from body
  let {
    drink,
    category,
    alcoholic,
    glass,
    instructions,
    drinkThumb,
    shortDescription,
    ingredients,
  } = req.body;

  // parse ingredients
  ingredients = JSON.parse(ingredients);

  // check is user adult
  const checkIsUserAdult = isAdult(user.dateOfBirth);

  // set non alcoholic if user age < 18
  if (checkIsUserAdult === false) {
    alcoholic = 'Non alcoholic';
  }

  // create newDrink
  const newDrink = {
    drink,
    category,
    alcoholic,
    glass,
    instructions,
    drinkThumb,
    ingredients,
    shortDescription,
    owner: user._id,
  };

  // add new drink
  const addedDrink = await Drink.create(newDrink);

  if (addedDrink === null) {
    throw HttpError(400, 'Bad request');
  }

  res.status(201).json({ addedDrink });
};

module.exports = drinkAdd;
