<script setup lang="ts">
import { ref } from 'vue';
import FeedbackItem from '@/components/FeedbackItem.vue';
import BasePagination from '@/components/BasePagination.vue';

import { useFeedback } from '@/stores/feedback';

const { feedbacks, selectedFeedback, setSelectedFeedback } = useFeedback();

const page = ref(1);
</script>

<template>
  <div class="border-r border-default-border-gray">
    <div
      class="p-2 flex items-center justify-between border-b border-default-border-gray"
    >
      <div class="text-xs text-defaul-text-gray">Filter</div>
      <div class="text-xs text-defaul-text-gray">Sort</div>
    </div>
    <div
      class="h-[calc(100vh-202px)] flex flex-col gap-y-2 overflow-y-auto border-b border-default-border-gray pb-6"
    >
      <FeedbackItem
        v-for="feedback in feedbacks"
        :is-selected="selectedFeedback?._id === feedback._id"
        :key="feedback.title"
        :feedback="feedback"
        @click="setSelectedFeedback(feedback)"
      />
    </div>
    <div class="p-2 mt-auto">
      <BasePagination
        v-model="page"
        :total-count="feedbacks.length"
        class="bg-white"
      />
    </div>
  </div>
</template>
