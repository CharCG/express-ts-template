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

export const findById = async (dto: GetUserDto) => {
  const user = await prisma.user.findUnique({
    where: { id: dto.id },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return user;
};

export const createUser = async (dto: CreateUserDto) => {
  const user = await prisma.user.create({
    data: dto,
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return user;
};
