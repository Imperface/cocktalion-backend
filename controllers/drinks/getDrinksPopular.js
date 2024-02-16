const {Drink} = require ('../../models/drink');

const getDrinksPopular = async(req, res) => {
    
    const drinksAll = await Drink.find();
    
    const drinksFavorite = drinksAll.filter(drink => {
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

module.exports = getDrinksPopular;