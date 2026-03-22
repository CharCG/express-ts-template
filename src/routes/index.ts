import { Router } from 'express';
import { validateMiddleware } from '../middlewares/validate.middleware';
import { GetUserSchema, CreateUserSchema } from '../schemas/user.schema';
import { getAll, getOne, create } from '../controllers/user.controller';

const router = Router();

router.get('/users', getAll);
router.get('/users/:id', validateMiddleware(GetUserSchema, 'params'), getOne);
router.post('/users', validateMiddleware(CreateUserSchema, 'body'), create);

export default router;
