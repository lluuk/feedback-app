import type { FeedbackWithId } from 'types';
import { readonly, ref } from 'vue';
import { useToast } from 'vue-toastification';
import { useAxios } from '@vueuse/integrations/useAxios';
import { axiosInstance } from '@/services/axios';

const toast = useToast();

const feedbacks = ref<FeedbackWithId[]>([]);
const selectedFeedback = ref<FeedbackWithId | null>(null);

export const useFeedback = () => {
  const setFeedbacks = (feedbackList: FeedbackWithId[]) => {
    feedbacks.value = feedbackList;
  };

  const setSelectedFeedback = (feedback: FeedbackWithId) => {
    selectedFeedback.value = feedback;
  };

  const getFeedbacks = async () => {
    try {
      const { data } = await useAxios<{ feedbacks: FeedbackWithId[] }>(
        '/api/feedback',
        axiosInstance,
      );
      setFeedbacks(data.value?.feedbacks || []);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const createNewFeedback = async (values: FeedbackWithId) => {
    try {
      const { data } = await useAxios<{ feedback: FeedbackWithId }>(
        '/api/feedback',
        { method: 'POST', data: values },
        axiosInstance,
      );

      if (data.value?.feedback) {
        setFeedbacks([data.value.feedback, ...feedbacks.value]);
        toast.success('Feedback succesfully created!');
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return {
    feedbacks: readonly(feedbacks),
    selectedFeedback: readonly(selectedFeedback),
    setFeedbacks,
    setSelectedFeedback,
    getFeedbacks,
    createNewFeedback,
  };
};
