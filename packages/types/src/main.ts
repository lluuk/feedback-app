import { z } from 'zod';
import { feedbackSchema } from 'validation';

export enum FeedbackTypeEnum {
  bug = 'bug',
  suggestion = 'suggestion',
}

export type FeedbackType = `${FeedbackTypeEnum}`;

export type Feedback = z.infer<typeof feedbackSchema>;

export interface FeedbackWithId extends Feedback {
  _id: string;
}
