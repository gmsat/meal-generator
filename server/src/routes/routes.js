const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

// get routes
router.get("/", controllers.testController);

module.exports = router;