import type {
  FeedbackQueryParams,
  FilterValue,
  SortValue,
} from '@/types/feedback';

export const getFeedbackQueryParams = (
  filterValue: FilterValue,
  sortValue: SortValue,
  page: number,
) => {
  const queryParams: FeedbackQueryParams = {
    page,
  };

  if (filterValue) {
    queryParams.filter = filterValue;
  } else if (queryParams.filter) {
    delete queryParams.filter;
  }

  if (sortValue) {
    queryParams.sort = sortValue;
    queryParams.order = sortValue === 'createdAt' ? 'desc' : 'asc';
  } else if (queryParams.sort) {
    delete queryParams.sort;
    delete queryParams.order;
  }

  return queryParams;
};
