import { Router } from "express";
import usuarioRutas from "./routes/usuario.routes.js";
import categoriaRutas from "./routes/categoria.routes.js";
import productoRutas from "./routes/producto.routes.js"
const router = Router();

router.use("/usuarios", usuarioRutas);
router.use("/categoria", categoriaRutas);
router.use("/producto", productoRutas);

export default router;
