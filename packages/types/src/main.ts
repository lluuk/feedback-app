export type FeedbackType = 'bug' | 'suggestion';

export interface IFeedback {
  name: string;
  email: string;
  type: FeedbackType;
  title: string;
  message: string;
  createdAt?: Date;
}
