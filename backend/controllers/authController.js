import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "meusegredo";

const login = async (req, res) => {
  try {
    const { userlog, passwordlog } = req.body;

    const usuario = await User.findOne({
      where: {
        user: userlog,
      },
    });
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario não encontrado" });
    }
    const validarSenha = await bcrypt.compare(passwordlog, usuario.password);

    if (!validarSenha) {
      return res.status(403).json({ msg: "Dados Incorretos!" });
    }
    const token = jwt.sign(
      { id: usuario.id, usuario: usuario.user },
      SECRET_KEY,
      { expiresIn: "1hr" }
    );
    return res.json(token);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Erro no servidor" });
  }
};

export default login;
