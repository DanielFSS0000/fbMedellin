import ProductoSchema from "../schemas/producto.js";

export const addProducto = (body) => {
    try{
        const producto = new ProductoSchema(body);
        return producto.save();
    }catch (error) {
        return null;
    }
};
export const getProducto = (query) => {
    try {
        return ProductoSchema.findOne(query);
    }catch (error) {
        return null;
    }
};
export const getProducts = (query) => {
    try {
        return ProductoSchema.find(query);
    }catch (error) {
        return[];
    }
};