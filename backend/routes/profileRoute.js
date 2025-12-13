const exporess = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware");

const profileController = require("../controllers/profileController");

const profileRoute = exporess.Router();

profileRoute.get("/", isAuthenticated, profileController.perfil);
module.exports = profileRoute;
