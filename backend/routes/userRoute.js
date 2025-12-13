const express = require("express");
const route = express.Router();
const usuarioControlle = require("../controllers/userController");

route.post("/", usuarioControlle.inserirUsuario);
route.get("/", usuarioControlle.listarUsuarios);
route.get("/:id", usuarioControlle.listarUsuariosId);
route.put("/:id", usuarioControlle.atualizarUsuario);

module.exports = route;
