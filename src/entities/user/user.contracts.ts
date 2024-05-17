import { z } from 'zod';
import { ArticleSchema } from '~entities/article/article.contracts';

export const LoginUserDtoSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
});

export const createUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  firstName: z.string(),
  lastName: z.string(),
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
  official: z.boolean(),
  lastName: z.string(),
  role: z.string(),
  photo: z.string(),
  favoriteArticles: z.array(ArticleSchema),
});
