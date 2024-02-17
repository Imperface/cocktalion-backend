import { Drink } from '../../models/drink';

const successStatus = 200;
const defaultDocNumber = 3;

const getAllDrinks = async (req, res) => {
  const isNumberSet = Boolean(req.query.number_of_every);

  const docNumber = isNumberSet
    ? Number(req.query.number_of_every)
    : defaultDocNumber;

  const result = await Drink.aggregate([
    { $sort: { category: 1 } },
    { $group: { _id: '$category', recipes: { $push: '$$ROOT' } } },
    { $project: { recipes: { $slice: ['$recipes', docNumber] } } },
  ]);

  res.status(successStatus).json(result);
};

export default getAllDrinks;
