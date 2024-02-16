const {Drink} = require('../../models/drink');

const getDrinksOwner = async (req, res) => {
   
    const userId = req.user._id;
   
    const drinks = await Drink.find({owner: userId});
        res.json(drinks);
    }

    module.exports = getDrinksOwner;