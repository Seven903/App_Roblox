const perfil = (req, res) => {
  return res.status(201).json({ msg: `Bem vindo ` + req.user.user});
};

export default perfil;
