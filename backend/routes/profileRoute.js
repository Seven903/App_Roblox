import express from "express";
import {
  isAuthenticated,
  verifyTokenAndSetUser,
} from "../middleware/authMiddleware.js";

import perfil from "../controllers/profileController.js";

const profileRoute = express.Router();

profileRoute.get("/perfil", verifyTokenAndSetUser, isAuthenticated, perfil);

export default profileRoute;
