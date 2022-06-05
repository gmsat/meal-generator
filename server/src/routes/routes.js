const express = require("express");
const router = express.Router();
const controllers = require("../controllers/recipeControllers");

// get routes
router.get("/getMeals", controllers.getRecipes);
router.get("/getRecipeInfo/:recipeId", controllers.getRecipeInfo);

module.exports = router;