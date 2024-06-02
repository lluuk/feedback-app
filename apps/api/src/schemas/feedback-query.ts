import { z } from 'zod';

export const querySchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).default(10),
  sort: z.enum(['name', 'createdAt']).default('createdAt'),
  order: z.enum(['asc', 'desc']).default('desc'),
  filter: z.string().optional(),
});
