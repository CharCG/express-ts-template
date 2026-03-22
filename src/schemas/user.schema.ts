import { z } from 'zod';

export const GetUserSchema = z.object({
  id: z.string().uuid(),
});

export const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export type GetUserDto = z.infer<typeof GetUserSchema>;
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
