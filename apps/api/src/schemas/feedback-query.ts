import { z } from 'zod';

export const querySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).default(10),
  sort: z.enum(['title', 'createdAt']).default('createdAt'),
  order: z.enum(['asc', 'desc']).default('desc'),
  filter: z.string().optional(),
});
