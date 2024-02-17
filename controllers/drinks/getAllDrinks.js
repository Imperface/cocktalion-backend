const { Drink } = require('../../models/drink');

const defaultDocNumber = 3;

const getAllDrinks = async (req, res) => {
  const isNumberSet = Boolean(req.query.number_of_every);

  const docNumber = isNumberSet
    ? Number(req.query.number_of_every)
    : defaultDocNumber;

  const result = await Drink.aggregate([
    { $sort: { category: 1 } },
    { $group: { _id: '$category', recipes: { $push: '$$ROOT' } } },
    { $project: { drinks: { $slice: ['$recipes', docNumber] } } },
    { $limit: 4 },
  ]);

  res.status(200).json(result);
};

module.exports = getAllDrinks;
