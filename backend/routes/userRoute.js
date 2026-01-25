import express from "express";
import { verifyTokenAndSetUser } from "../middleware/authMiddleware.js";
const userRoute = express.Router();
import usuarioControlle from "../controllers/userController.js";

userRoute.post("/", usuarioControlle.inserirUsuario);
userRoute.use(verifyTokenAndSetUser);
userRoute.get("/", usuarioControlle.listarUsuarios);
userRoute.get("/:id", usuarioControlle.listarUsuariosId);
userRoute.put("/:id", usuarioControlle.atualizarUsuario);

export default userRoute;
