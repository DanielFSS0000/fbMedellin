import * as serviceUsuario from "../services/usuario.service.js";
import bcrypt from "bcryptjs";

export const getUser = async (req, res) => {
  if (req.params.id) {
    res.send(await serviceUsuario.getUser({ _id: req.params.id }));
  } else {
    res.send(await serviceUsuario.getUsers());
  }
};

export const putUser = (req, res) => {
  res.send({
    title: "ok",
    message: `modificando usuario por id ${req.params.id}`,
  });
};

export const insertUser = async (req, res) => {
  let bodyUser = req.body;
  bodyUser.password = bcrypt.hashSync(bodyUser.password.toString(), 10);
  const newUser = await serviceUsuario.addUser(bodyUser);
  if (newUser) {
    res.send({
      title: "ok",
      message: "El usuario fue creado",
      newUser,
    });
    return;
  }

  res.status(502).send({
    title: "error",
    message: "El usuario no fue creado",
  });
};

export const delUser = (req, res) => {
  res.send({
    title: "ok",
    message: `eliminando usuario por id ${req.params.id}`,
  });
};
