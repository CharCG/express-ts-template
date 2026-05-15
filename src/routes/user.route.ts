import { Router } from 'express';
import { validateMiddleware } from '../middlewares/validate.middleware';
import { GetUserSchema, CreateUserSchema } from '../schemas/user.schema';
import { getAll, getOne, create } from '../controllers/user.controller';

const router = Router();

router.get('/', getAll);
router.get('/:id', validateMiddleware(GetUserSchema, 'params'), getOne);
router.post('/', validateMiddleware(CreateUserSchema, 'body'), create);

export default router;
