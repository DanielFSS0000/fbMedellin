import * as serviceCategoria from "../services/categoria.service.js";
export const getCategory = async(req, res) => {
    if(req.params.id){
        res.send(await serviceCategoria.getCategory({_id: req.params.id}));
    }else {
        res.send(await serviceCategoria.getCategory());
    }
};
export const putCategory = (req,res) => {
    res.send({
        title: "ok",
        message: `modificando categoria por id ${req.params.id}`,
    });
};
export const insertCategory = async(req, res) => {
    let bodyCategoria = req.body;
    console.log(req.body);
    const newCategoria = await serviceCategoria.addCategory(bodyCategoria);
    if(newCategoria){
        res.send({
            title:"ok",
            message:"La categoria fue creada",
            newCategoria,
        });
        return;
        
    }

    res.status(502).send({
        title:"error",
        message:"La categoria no fue creada",
    });
};

export const delCategory = (req,res) => {
    res.send({
        tittle: "ok",
        message: `eliminando categoria por id ${req.params.id}`,
    });
};