import { z } from 'zod';
import { FeedbackTypeEnum } from 'types';

export const feedbackSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  type: z.enum([FeedbackTypeEnum.bug, FeedbackTypeEnum.suggestion]),
  title: z.string().min(1),
  message: z.string().min(1),
  createdAt: z.date().optional(),
});
