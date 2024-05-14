import { number, z } from 'zod';

export const CommentSchema = z.object({
  id: z.number(),
  author: z.string(),
  content: z.string(),
  created: z.string().datetime(),
  article: z.number(),
});

export const CreateCommentSchema = z.object({
  content: z.string(),
  article: z.number(),
});
