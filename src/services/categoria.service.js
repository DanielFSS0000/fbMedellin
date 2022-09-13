import CategoriaSchema from "../schemas/categoria.js";

export const addCategory = (body) =>{
    try{
        const categoria = new CategoriaSchema(body);
        return categoria.save();
    } catch (error){
        return null;
    }
};
export const getCategory = (query) => { 
    try {
        return CategoriaSchema.findOne(query);
    }catch (error){
        return null;
    }
};
export const getCategorys = (query) => {
    try{
        return CategoriaSchema.find(query)
    }catch (error){
        return [];
    }
}