import express from "express";
const userRoute = express.Router();
import usuarioControlle from "../controllers/userController.js";

userRoute.post("/", usuarioControlle.inserirUsuario);
userRoute.get("/", usuarioControlle.listarUsuarios);
userRoute.get("/:id", usuarioControlle.listarUsuariosId);
userRoute.put("/:id", usuarioControlle.atualizarUsuario);

export default userRoute;
