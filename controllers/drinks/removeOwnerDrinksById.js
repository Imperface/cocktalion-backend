const {Drink} = require('../../models/drink');
const {HttpError} = require("../../helpers/index");


const deleteDrinksOwnerById = async (req, res) => {
   
    const { id } = req.params;
    const userId = req.user.id;
    const drink = await Drink.findOneAndDelete({_id: id, owner: userId});
    if (drink === null) {
        throw HttpError(404, "Drink Not Found");
      }
      res.status(200).send({ message: "Drink deleted" });
    };
       
    

    module.exports = deleteDrinksOwnerById;
