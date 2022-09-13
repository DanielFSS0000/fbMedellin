import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    precio:{
        type: String,
        required: true,
    },
    foto:{
        type: String,
        required: true,
    },
    talla:{
        type: String,
        required: true,
        enum:["XS", "S","M","L","XL"],
    },
    idCategoria:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:'categoria',
    },
    color:{
        type:String,
        required: true,
    },
    referencia:{
        type: String,
        required: true,
    },
});
export default model("producto", productoSchema);