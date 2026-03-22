import { Request, Response } from 'express';
import { findAll, findById, createUser } from '../services/user.service';
import { AppResponse } from '../utils/response.util';

export const getAll = async (req: Request, res: Response) => {
  const users = await findAll();
  AppResponse.success(200, 'Users retrieved successfully', users).send(res);
};

export const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await findById({ id: id });
  AppResponse.success(200, 'User retrieved successfully', user).send(res);
};

export const create = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const newUser = await createUser({ name, email, password });
  AppResponse.success(201, 'User created successfully', newUser).send(res);
};
