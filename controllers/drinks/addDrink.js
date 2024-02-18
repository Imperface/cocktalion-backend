const { Drink } = require('../../models/drink');
const { isAdult, HttpError, cloudinary } = require('../../helpers');

const drinkAdd = async (req, res, next) => {
  // get user from req
  const { user } = req;

  // get file
  const { file } = req;

  // throw error if file === undefined
  if (file === undefined) {
    throw HttpError(400, 'Bad request');
  }

  // get data from body
  let {
    drink,
    category,
    alcoholic,
    glass,
    instructions,
    shortDescription,
    ingredients,
  } = req.body;

  // parse ingredients
  ingredients = JSON.parse(ingredients);

  // check is user adult
  const checkIsUserAdult = isAdult(user.dateOfBirth);

  // throw error if user try add Alcoholic drink with user age < 18
  if (checkIsUserAdult === false && alcoholic === 'Alcoholic') {
    throw HttpError(
      403,
      'Forbidden: underage users cannot create alcoholic drinks'
    );
  }
  // get file path
  const { path: tempUpload } = req.file;

  // send file to cloudinary
  const avatar = await cloudinary.uploader.upload(
    tempUpload,
    {
      folder: 'drinksAvatars',
      allowed_formats: ['png', 'jpg', 'jpeg'],
    },
    error => {
      if (error) {
        next(HttpError(400, 'Bad request'));
      }
    }
  );

  const drinkThumb = avatar.url;

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
