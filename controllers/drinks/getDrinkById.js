const Drink = require ("../../models/drink");

const getDrinkById = async(req, res) => {
    const drink = await Drink.findById (req.params.id)
    if (contact === null) {
      res.status(404).json({"message": "Not found"});
      }
    
  res.json(drink);
}
module.exports = getDrinkById;
