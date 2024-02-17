const { GLASSES } = require('../../constants');

const listGlasses = async (req, res) => {
  res.status(200).json({ glasses: GLASSES });
};

module.exports = listGlasses;
