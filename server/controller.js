breakfast =["eggwhites and pancake","cereal and turkey bacon","scramble egss with meat patty","ground turkey with sunny side up eggs" ]
lunch =["chicken and rice with veggies","soft tacos","hamburger with fries","pho","panda express"]
dinner =["steak and potatoes","pizza and hot wings","korean bbq","pasta with garlic bread","tilapia and veggies"]

module.exports = {
    getBreakfast: (req, res) => {
        let breakMeal = Math.floor(Math.random()*(breakfast.length-1))

        res.status(200).send(breakfast[breakMeal])
    },
getLunch: (req, res) => {
        let lunchMeal = Math.floor(Math.random()*(lunch.length-1))

        res.status(200).send(lunch[lunchMeal])
    },
    getDinner: (req, res) => {
        let dinnerMeal = Math.floor(Math.random()*(dinner.length-1))

        res.status(200).send(dinner[dinnerMeal])
    }
}
