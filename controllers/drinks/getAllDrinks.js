const { Drink } = require('../../models/drink');
const isAdult = require('../../helpers/isAdult');

const getAllDrinks = async (req, res) => {
  let { number_of_every = 3 } = req.query;

  number_of_every = Number(number_of_every);

  const { dateOfBirth } = req.user;

  const isUserAdult = isAdult(dateOfBirth);

  const alcoholicFilter = isUserAdult ? {} : { alcoholic: 'Non alcoholic' };

  const result = await Drink.aggregate([
    { $match: alcoholicFilter },
    { $sort: { category: 1 } },
    { $group: { _id: '$category', recipes: { $push: '$$ROOT' } } },
    { $project: { drinks: { $slice: ['$recipes', number_of_every] } } },
    { $limit: 4 },
  ]);

  res.status(200).json(result);
};

module.exports = getAllDrinks;
