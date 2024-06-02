import type { Feedback } from 'types';
import { readonly, ref } from 'vue';

const feedbacks = ref<Feedback[]>([]);
const selectedFeedback = ref<Feedback | null>(null);

export const useFeedback = () => {
  const setFeedbacks = (feedbackList: Feedback[]) => {
    feedbacks.value = feedbackList;
  };

  const setSelectedFeedback = (feedback: Feedback) => {
    selectedFeedback.value = feedback;
  };

  return {
    feedbacks: readonly(feedbacks),
    selectedFeedback: readonly(selectedFeedback),
    setFeedbacks,
    setSelectedFeedback,
  };
};
