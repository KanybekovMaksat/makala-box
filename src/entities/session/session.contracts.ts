import { z } from 'zod';

export const LoginUserDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const TokensDtoSchema = z.object({
  access: z.string(),
  refresh: z.string(),
});

export const UserDtoSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.string(),
  photo: z.string(),
});
