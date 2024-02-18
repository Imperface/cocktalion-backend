const {Drink} = require ('../../models/drink');
const {isAdult} = require('../../helpers')

const getDrinksPopular = async(req, res) => {

const findPopularDrinks = (arr) => {
    const drinksFavorite = arr.filter(drink => {
        if (drink.favorites.length !== 0) {
            return true
        }
    })
    .sort(drink = (a, b) => {
        if (a.favorites.length < b.favorites.length) {
            return 1
        }
        if (a.favorites.length > b.favorites.length) {
            return -1
        } 
        return 0   
        } )
    .slice(0, 4);
       
res.send(drinksFavorite);
}
    
    const chekAdult = isAdult(req.user.dateOfBirth);
    
    if (chekAdult === false){
        const drinksAll = await Drink.find({alcoholic: "Non alcoholic"});

   findPopularDrinks(drinksAll);
} 
const drinksAll = await Drink.find();  
findPopularDrinks(drinksAll);
  
}

module.exports = getDrinksPopular;
