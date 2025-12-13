const db = require("../db/banco");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET;

function verifyTokenAndSetUser(req, res, next) {
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
    let query = `SELECT id , user FROM Usuario WHERE id = ?`;

    db.get(query, [decoded.id], (err, user) => {
      if (err || !user) {
        req.user = null;
        return next();
      }

      req.user = {
        id: user.id,
        usuario: user.user,
        dataNascimento: user.dataNascimento,
      };
      return next();
    });
  } catch (err) {
    req.user = null;
    return next();
  }
}

function isAuthenticated(req, res, next) {
  if (req.user) {
    return next();
  }

  return res.status(401).json({ error: "Não autenticado" });
}

module.exports = { verifyTokenAndSetUser, isAuthenticated };
