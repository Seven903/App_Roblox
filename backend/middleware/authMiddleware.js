import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

const verifyTokenAndSetUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    req.user = null;
    return next();
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    req.user = null;
    return next();
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const usuario = await User.findByPk(decoded.id);
    if (!usuario) {
      req.user = null;
      return next();
    }

    req.user = {
      id: usuario.id,
      usuario: usuario.user,
    };
    return next();
  } catch (err) {
    req.user = null;
    return next();
  }
};

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    return next();
  }

  return res.status(401).json({ error: "Não autenticado" });
};

export default { verifyTokenAndSetUser, isAuthenticated };
