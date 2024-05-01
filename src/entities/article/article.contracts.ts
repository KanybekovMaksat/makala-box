import { z } from 'zod';

export const ArticleSchema = z.object({
  id: z.number(),
  categories: z.array(z.string()),  
  totalLikes: z.number(),
  photo: z.string().url(),
  title: z.string(),
  subtitle: z.string(),
  body: z.array(z.object({})),
  likeCount: z.number(),
  viewCount: z.number(),
  readTime: z.number(),
  status: z.enum(['draft', 'pending', 'approved', 'rejected', 'published']),
  moderatorComment:z.string(),
  updated: z.string(),
  created: z.string(),
  author: z.string(),
  authorId: z.number(),
  authorPhoto: z.string().url(),
  organization: z.number(),
  likes: z.array(z.number()),
});

export const ArticlesList = z.object({
  count: z.number(),
  next: z.string().url(),
  previous: z.string().url(),
  results: z.array(ArticleSchema),
});

export const ArticleView = z.object({
  body: z.array(z.object({})),
});

export const ArticleLike = z.object({
  id: z.number(),
  likeCount: z.number(),
  likes: z.array(z.number()),
});


export const CreateArticleDtoSchema = z.object({
  title: z.string().min(3),
  subtitle: z.string().min(3),
  body: z.array(z.object({})),
  organization: z.number(),
  status: z.string(),
  readTime: z.number(),
  categories: z.array(z.string()),
  photo: z.instanceof(File),
});
