export enum FeedbackTypeEnum {
  bug = 'bug',
  suggestion = 'suggestion',
}

export type FeedbackType = `${FeedbackTypeEnum}`;

export interface IFeedback {
  name: string;
  email: string;
  type: FeedbackType;
  title: string;
  message: string;
  createdAt?: Date;
}
