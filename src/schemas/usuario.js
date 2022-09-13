import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  nick: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  rol: {
    type: String,
    required: true,
    enum: ["ADMIN", "USER"],
  },
});

export default model('usuario', usuarioSchema);
