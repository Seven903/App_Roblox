const db = require("../db/banco");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "meusegredo"

exports.login = (req, res) => {

  const { userlog, passwordlog} = req.body;

  let query = `SELECT * FROM Usuario WHERE user = ? `;

  db.get(query, [userlog], async (err, usuario) => {
  
    if (err) {
      return res.status(500).json({ msg: err });
    }
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario nao encontrado" });
    }

    let conferirsenha = await bcrypt.compare(passwordlog,usuario.password);

    if(!conferirsenha){
        return res.status(403).json({msg: "Usuario ou senha invalida"})
    }else{
        const token = jwt.sign({id: usuario.id, user: usuario.user},SECRET_KEY,{expiresIn: "1h"})

       return res.status(201).json({token})
    }
  });
};
