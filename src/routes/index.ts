import { Router } from 'express';
import { userRouter } from '../modules/user/user.route.js';

export const router = Router();

router.use('/users', userRouter);