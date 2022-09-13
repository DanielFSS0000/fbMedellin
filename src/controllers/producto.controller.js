import * as serviceProducto from "../services/producto.service.js";
export const getProduct = async(req, res) => {
    if(req.params.id){
        res.send(await serviceProducto.getProduct({ _id: req.params.id}));
    } else {
        res.send(await serviceProducto.getProduct());
    }
};
export const putProduct = (req,res) => {
    res.send({
        title: "ok",
        message: `modificando producto por id ${req.params.id}`,
    });
};
export const inserProduct = async(req, res) => {
   let bodyProducto = req.body;
   console.log(req.body);
   const newProducto = await serviceProducto.addProducto(bodyProducto);
   if(newProducto){
    res.send({
        title: "ok",
        message: "el producto fue creado",
        newProducto,
    });
    return;
   }
   res.status(502).send({
    title: "error",
    message: "La categoria no fue creada",
   });
};
export const delProduct = (req,res) => {
    res.send({
        title: "ok",
        message: `eliminando producto por id ${req.params.id}`,
    });
};