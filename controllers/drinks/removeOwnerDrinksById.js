const { Drink } = require('../../models/drink');
const { HttpError } = require('../../helpers');

const deleteDrinksOwnerById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const selectedDrink = await Drink.findById({ _id: id });
  if (selectedDrink === null) {
    throw HttpError(404, 'Drink Not Found');
  }

  if (String(selectedDrink.owner) !== String(userId)) {
    throw HttpError(
      403,
      'Forbidden: only the owner of the drink can remove it'
    );
  }
  const drink = await Drink.findOneAndDelete({ _id: id, owner: userId });

  if (drink === null) {
    throw HttpError(404, 'Drink Not Found');
  }
  res.status(200).send({ message: 'Drink deleted' });
};

module.exports = deleteDrinksOwnerById;
