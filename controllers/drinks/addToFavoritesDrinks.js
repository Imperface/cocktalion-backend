const { Drink } = require('../../models/drink');
const { HttpError } = require('../../helpers');

const addToFavoritesDrinks = async (req, res) => {
  const { drinkId } = req.body; 

    const drink = await Drink.findOne({ _id: drinkId }); 

    if (!drink) {
      throw HttpError(404, 'Not found'); 
    }

    drink.favorites.push(req.user._id);

    await drink.save();

    res.status(200).json({ message: 'Drink added to favorites', drink: drink });
};

module.exports = addToFavoritesDrinks;