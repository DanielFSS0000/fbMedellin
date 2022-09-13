import {Router} from 'express';
import {
    delProduct,
    getProduct,
    inserProduct,
    putProduct,
} from '../controllers/producto.controller.js';
const router = Router();

router.get('/:id?',getProduct)
        .post('/', inserProduct)
        .put('/:id',putProduct)
        .delete('/:id',delProduct);

export default router;