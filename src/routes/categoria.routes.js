import {Router} from 'express';
import {
    delCategory,
    getCategory,
    insertCategory,
    putCategory,
} from '../controllers/categoria.controller.js';
const router = Router();

router.get('/:id?',getCategory)
        .post('/',insertCategory)
        .put('/:id',putCategory)
        .delete('/:id',delCategory);

export default router;
