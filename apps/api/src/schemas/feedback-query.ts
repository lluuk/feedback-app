import { z } from 'zod';

export const querySchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).default(10),
  sort: z
    .enum(['name', 'email', 'type', 'message', 'title', 'createdAt'])
    .default('createdAt'),
  order: z.enum(['asc', 'desc']).default('desc'),
  filterKey: z.enum(['name', 'email', 'type', 'message', 'title']).optional(),
  filterValue: z.string().optional(),
});
