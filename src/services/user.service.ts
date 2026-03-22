import { GetUserDto, CreateUserDto } from '../schemas/user.schema';
import { prisma } from '../config/prisma.config';

export const findAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return users;
};

export const findById = async (data: GetUserDto) => {
  const user = await prisma.user.findUnique({
    where: { id: data.id },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return user;
};

export const createUser = async (data: CreateUserDto) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return user;
};
