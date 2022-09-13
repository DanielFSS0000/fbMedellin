import { Schema, model } from "mongoose";

const categoriaSchema = new Schema({
    nombre: {
    type: String,
    required: true,
    },
});
export default model('categoria', categoriaSchema);