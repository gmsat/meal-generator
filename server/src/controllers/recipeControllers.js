const axios = require("axios");
const apiKey = process.env.SPOONACULAR_API_KEY;

module.exports = {
    getRecipes: async (req, res) => {
        const {calories, timeFrame, diet} = req.query;
        const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=${timeFrame}&diet=${diet}&targetCalories=${calories}`;
        const response = await axios(url).catch(e => e.response)

        if (response.data.code === 402) {
            console.log(response.data.message)
            return res.send({success: false, data: response.data})
        }

        try {
            if (response.status === 200) {
                return res.send({success: true, data: response.data})
            }
            else {
                return res.send({success: false, error: response})
            }

        } catch (e) {
            return res.send({success: false, e})
        }
    },
    getRecipeInfo: async (req, res) => {
        const {recipeId} = req.params;
        const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}&includeNutrition=true`

        try {
            const response = await axios(url);
            if (response.status === 200) {
                return res.send({success: true, data: response.data});
            } else {
                return res.send({success: false, error: response})
            }
        } catch (e) {
            return res.send({success: false, e})
        }
    }
}