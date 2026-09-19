import { Request, Response } from 'express';
import { success } from '../../shared/app-response.js';

import * as userService from './user.service.js';

export const getUsers = async (_req: Request, res: Response) => {
  const users = await userService.getAll();

  return success(res, users, 'Users retrieved successfully');
};

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const user = await userService.getById({ id });

  return success(res, user, 'User retrieved successfully');
};

export const createUser = async (req: Request, res: Response) => {
  const user = await userService.create(req.body);

  return success(res, user, 'User created successfully', 201);
};
