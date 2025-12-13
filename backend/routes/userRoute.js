const express = require("express");
const userRoute = express.Router();
const usuarioControlle = require("../controllers/userController");

userRoute.post("/", usuarioControlle.inserirUsuario);
userRoute.get("/", usuarioControlle.listarUsuarios);
userRoute.get("/:id", usuarioControlle.listarUsuariosId);
userRoute.put("/:id", usuarioControlle.atualizarUsuario);

module.exports = userRoute;
