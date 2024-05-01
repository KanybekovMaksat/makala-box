import { z } from 'zod';

export const OrganizationSchema = z.object({
  id: z.number(),
  name: z.string(),
  photo: z.string().url(),
});
