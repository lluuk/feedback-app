import type { FeedbackWithId } from 'types';
import { readonly, ref } from 'vue';

const feedbacks = ref<FeedbackWithId[]>([]);
const selectedFeedback = ref<FeedbackWithId | null>(null);

export const useFeedback = () => {
  const setFeedbacks = (feedbackList: FeedbackWithId[]) => {
    feedbacks.value = feedbackList;
  };

  const setSelectedFeedback = (feedback: FeedbackWithId) => {
    selectedFeedback.value = feedback;
  };

  return {
    feedbacks: readonly(feedbacks),
    selectedFeedback: readonly(selectedFeedback),
    setFeedbacks,
    setSelectedFeedback,
  };
};
