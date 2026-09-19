import { Router } from 'express';
import { validateMiddleware } from '../../middlewares/validate.middleware.js';

import * as userController from './user.controller.js';
import { createUserSchema, getUserByIdSchema } from './user.schema.js';

export const userRouter = Router();

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', validateMiddleware(getUserByIdSchema), userController.getUserById);
userRouter.post('/', validateMiddleware(createUserSchema), userController.createUser);
