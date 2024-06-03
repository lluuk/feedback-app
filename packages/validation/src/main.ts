import { z } from 'zod';

export const feedbackSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  type: z.enum(['bug', 'suggestion']),
  title: z.string().min(1),
  message: z.string().min(1),
  createdAt: z.date().optional(),
});
