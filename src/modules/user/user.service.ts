import { ConflictError, NotFoundError } from '../../shared/app-error.js';
import { prisma } from '../../config/prisma.config.js';
import { CreateUserDto, GetUserByIdDto } from './user.schema.js';

export const getAll = async () => {
  return prisma.user.findMany({
    omit: { password: true },
  });
};

export const getById = async (dto: GetUserByIdDto) => {
  const user = await prisma.user.findUnique({
    where: { id: dto.id },
    omit: { password: true },
  });

  if (!user) {
    throw new NotFoundError('User not found');
  }

  return user;
};

export const create = async (dto: CreateUserDto) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: dto.email,
    },
  });

  if (existingUser) {
    throw new ConflictError('Email already registered');
  }

  return prisma.user.create({
    data: {
      name: dto.name,
      email: dto.email,
      password: dto.password,
    },
    omit: { password: true },
  });
};
