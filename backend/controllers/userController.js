import bcrypt from "bcrypt";
import User from "../models/User.js";

const listarUsuarios = async (req, res) => {
  try {
    const usuario = await User.findAll();
    if (usuario.length === 0) {
      res.status(404).json({ msg: "Nenhum usuario cadastrado no banco." });
    }
    return res
      .status(200)
      .json(usuario);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Erro no servidor." });
  }
};

const listarUsuariosId = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(403).json({ msg: "ID Invalido!" });
    }
    const usuario = await User.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario não encontrado" });
    }
    return res.json(usuario);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erro no servidor");
  }
};

const inserirUsuario = async (req, res) => {
  const { user, password, dataNascimento, genero } = req.body;
  const salt = 9;
  const hash = await bcrypt.hash(password, salt);
  const usuario = await User.create({
    user: user,
    password: hash,
    dataNascimento: dataNascimento,
    genero: genero,
  });
  if (!usuario.user || !usuario.password || !usuario.dataNascimento) {
    return res
      .status(403)
      .json({ msg: "Preecha todos os campos nescessarios" });
  }
  return res
    .status(201)
    .json({ msg: "Usuario criado com sucesso!", usuario: usuario });
};

const atualizarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const { user, password, dataNascimento} = req.body;
    const usuario = await User.update(
      { user: user, password: password,dataNascimento: dataNascimento },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(201).json({ msg: "Usuario atualizado", id: id});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Erro No servidor" });
  }
};

export default {
  inserirUsuario,
  listarUsuarios,
  listarUsuariosId,
  atualizarUsuario,
};
