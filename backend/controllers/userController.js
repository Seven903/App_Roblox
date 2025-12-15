const bcrypt = require("bcrypt");
const db = require("../db/banco.js");

exports.listarUsuarios = (req, res) => {
  let query = `SELECT * FROM Usuario`;

  db.all(query, [], function (err, rows) {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }

    return res.json({ rows });
  });
};

exports.listarUsuariosId = (req, res) => {
  const id = req.params.id;
  let query = `SELECT * FROM Usuario WHERE id= ?`;

  db.get(query, [id], function (err, row) {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.json(row);
  });
};

exports.inserirUsuario = async (req, res) => {
  const { user, password, dataNascimento , genero } = req.body;
  let query = `INSERT INTO Usuario (user, password, dataNascimento, genero) VALUES (?,?,?,?)`;
  const salt = 9;
  if (
    !user ||
    user.trim() === "" ||
    !password ||
    password.trim() === "" ||
    !dataNascimento ||
   dataNascimento.trim() === ""
  ) {
    return res.status(400).json({ msg: "Preecha os campo corretamente" });
  }


  const hash = await bcrypt.hash(password, salt);

  db.run(query, [user, hash, dataNascimento,genero], function (err) {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.json({ msg: "Usuario criado com sucesso!", id: this.lastID });
  });
};

exports.atualizarUsuario = async (req, res) => {
  const id = req.params.id;
  const { user, password } = req.body;
  const salt = 9;
  const hash = await bcrypt.hash(password, salt);
  let query = `UPDATE Usuario SET user = ? , password = ? WHERE id= ?`;

  db.run(query, [user, hash, id], (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.json({ msg: "Usuario atualizado com sucesso" });
  });
};
