import type { FeedbackWithId } from 'types';
import { computed, readonly, ref, watch } from 'vue';
import { useToast } from 'vue-toastification';
import { useAxios } from '@vueuse/integrations/useAxios';
import type {
  FeedbackQueryParams,
  FilterValue,
  SortValue,
} from '@/types/feedback';

import { axiosInstance } from '@/services/axios';
import { getFeedbackQueryParams } from '@/lib/feedback';

const toast = useToast();

const feedbacks = ref<FeedbackWithId[]>([]);
const selectedFeedback = ref<FeedbackWithId | null>(null);
const feedbackFilterValue = ref<FilterValue>(undefined);
const feedbackSortValue = ref<SortValue>(undefined);
const feedbackListPage = ref(1);
const feedbacksTotalCount = ref(0);

const feedbackQueryParams = computed<FeedbackQueryParams>(() =>
  getFeedbackQueryParams(
    feedbackFilterValue.value,
    feedbackSortValue.value,
    feedbackListPage.value,
  ),
);

export const useFeedback = () => {
  const setFeedbacks = (feedbackList: FeedbackWithId[]) => {
    feedbacks.value = feedbackList;
  };

  const setSelectedFeedback = (feedback: FeedbackWithId | null) => {
    selectedFeedback.value = feedback;
  };

  const getFeedbacks = async () => {
    try {
      const { data } = await useAxios<{
        feedbacks: FeedbackWithId[];
        totalCount: number;
      }>('/api/feedback', { params: feedbackQueryParams.value }, axiosInstance);
      setFeedbacks(data.value?.feedbacks || []);
      feedbacksTotalCount.value = data.value?.totalCount || 0;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const createNewFeedback = async (values: FeedbackWithId) => {
    const valuesWithMsgAsHtml = {
      ...values,
      message: values.message.replace(/\n/g, '<br>'),
    };
    try {
      const { data } = await useAxios<{ feedback: FeedbackWithId }>(
        '/api/feedback',
        { method: 'POST', data: valuesWithMsgAsHtml },
        axiosInstance,
      );

      if (data.value?.feedback) {
        setFeedbacks([data.value.feedback, ...feedbacks.value]);
        feedbacksTotalCount.value += 1;
        toast.success('Feedback succesfully created!');
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const setFeedbackFilterValue = (filterValue: FilterValue) => {
    feedbackFilterValue.value = filterValue;
  };

  const setFeedbackSortValue = (sortValue: SortValue) => {
    feedbackSortValue.value = sortValue;
  };

  const setFeedbackListPage = (page: number) => {
    feedbackListPage.value = page;
  };

  const resetFilterAndSortValues = () => {
    feedbackFilterValue.value = undefined;
    feedbackSortValue.value = undefined;
  };

  watch(feedbacks, () => setSelectedFeedback(null));
  watch(feedbackListPage, async () => await getFeedbacks());
  watch([feedbackFilterValue, feedbackSortValue], async () => {
    setFeedbackListPage(1);
    await getFeedbacks();
  });

  return {
    feedbacks: readonly(feedbacks),
    selectedFeedback: readonly(selectedFeedback),
    feedbackFilterValue: readonly(feedbackFilterValue),
    feedbackSortValue: readonly(feedbackSortValue),
    feedbacksTotalCount: readonly(feedbacksTotalCount),
    feedbackListPage: readonly(feedbackListPage),
    setFeedbacks,
    setSelectedFeedback,
    getFeedbacks,
    createNewFeedback,
    setFeedbackFilterValue,
    setFeedbackSortValue,
    setFeedbackListPage,
    resetFilterAndSortValues,
  };
};
