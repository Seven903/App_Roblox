import exporess from "express";
import  isAuthenticated  from "../middleware/authMiddleware.js";

import perfil from "../controllers/profileController.js";

const profileRoute = exporess.Router();

profileRoute.get("/", isAuthenticated.isAuthenticated, perfil);

export default profileRoute;
