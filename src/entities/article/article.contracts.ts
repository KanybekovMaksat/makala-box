import { z } from 'zod';

export const ArticleDtoSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string(),
  photo: z.string(),
  body: z.string(),
  likes_total: z.number(),
  read_time: z.number(),
  view_time: z.number(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  categories_id: z.array(z.number()),
  author_id: z.string(),
  organization_id: z.string(),
});

export const ArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string(),
  photo: z.string(),
  body: z.string(),
  likes_total: z.number(),
  read_time: z.number(),
  view_time: z.number(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  categories_id: z.array(z.number()),
  author_id: z.string(),
  organization_id: z.string(),
});
