import type { FeedbackType } from 'types';

export type FilterValue = FeedbackType | undefined;
export type SortValue = 'title' | 'createdAt' | undefined;

export type FeedbackQueryParams = {
  filter?: FilterValue;
  sort?: SortValue;
  order?: 'desc' | 'asc';
  page: number;
};
