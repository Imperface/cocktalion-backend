const { DRINKS_CATEGORY } = require('../../constants');

const listCategory = async (req, res) => {
  res.status(200).json({ category: DRINKS_CATEGORY });
};

module.exports = listCategory;
