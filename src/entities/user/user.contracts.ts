import { z } from 'zod';
import { ArticleSchema } from '~entities/article/article.contracts';

export const LoginUserDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  password: z.string().min(6),
});

export const ActivationData = z.object({
  uid: z.string(),
  token: z.string(),
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
  favoritePosts: z.array(ArticleSchema),
});
