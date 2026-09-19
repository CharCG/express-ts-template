import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

export const getUserByIdSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
});

export type CreateUserDto = z.infer<typeof createUserSchema>['body'];
export type GetUserByIdDto = z.infer<typeof getUserByIdSchema>['params'];
