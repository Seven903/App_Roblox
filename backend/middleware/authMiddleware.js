import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

export async function verifyTokenAndSetUser(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ msg: "Token não fornecido" });
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    return res.status(400).json({ msg: "Token mal formatado" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const usuario = await User.findByPk(decoded.id);

    if (!usuario) {
      return res.status(404).json({ msg: "Usuário não encontrado" });
    }

    req.user = {
      id: usuario.id,
      name: usuario.name,
    };

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token inválido ou expirado" });
  }
}

export function isAuthenticated(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ msg: "Não autenticado" });
  }
  next();
}
