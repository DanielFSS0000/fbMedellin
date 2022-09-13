import UserSchema from "../schemas/usuario.js";

export const addUser = (body) => {
  try {
    const usuario = new UserSchema(body);
    return usuario.save();
  } catch (error) {
    return null;
  }
};

export const getUser = (query) => {
  try {
    return UserSchema.findOne(query);
  } catch (error) {
    return null;
  }
};

export const getUsers = (query) => {
  try {
    return UserSchema.find(query)
  } catch (error) {
    return [];
  }
}
