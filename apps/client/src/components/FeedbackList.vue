<script setup lang="ts">
import FeedbackItem from '@/components/FeedbackItem.vue';
import BasePagination from '@/components/BasePagination.vue';
import FilterSelect from '@/components/FilterSelect.vue';
import BaseButton from '@/components/BaseButton.vue';

import { useFeedback } from '@/stores/feedback';
import { FeedbackTypeEnum } from 'types';

const filtersOptions = [
  { label: FeedbackTypeEnum.bug, value: FeedbackTypeEnum.bug },
  { label: FeedbackTypeEnum.suggestion, value: FeedbackTypeEnum.suggestion },
];
const sortOptions = [
  { label: 'date', value: 'createdAt' },
  { label: 'title', value: 'title' },
];

const {
  feedbacks,
  selectedFeedback,
  setSelectedFeedback,
  feedbackSortValue,
  setFeedbackSortValue,
  feedbackFilterValue,
  setFeedbackFilterValue,
  feedbacksTotalCount,
  feedbackListPage,
  setFeedbackListPage,
  resetFilterAndSortValues,
} = useFeedback();
</script>

<template>
  <div class="border-r border-default-border-gray">
    <div class="p-2 flex-start border-b border-default-border-gray">
      <div
        class="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between"
      >
        <div class="text-xs text-defaul-text-gray flex gap-x-2 items-center">
          <span>Filter</span>
          <FilterSelect
            :model-value="feedbackFilterValue"
            @update:model-value="setFeedbackFilterValue"
            :options="filtersOptions"
            placeholder="Select value"
            class="w-20"
          />
        </div>
        <div class="text-xs text-defaul-text-gray flex gap-x-2 items-center">
          <span>Sort</span>
          <FilterSelect
            :model-value="feedbackSortValue"
            @update:model-value="setFeedbackSortValue"
            :options="sortOptions"
            placeholder="Select value"
            class="w-20"
          />
        </div>
      </div>
      <BaseButton
        v-if="feedbackFilterValue || feedbackSortValue"
        class="mt-2"
        size="sm"
        variant="secondary"
        @click="resetFilterAndSortValues"
      >
        Reset
      </BaseButton>
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
        :model-value="feedbackListPage"
        @update:model-value="setFeedbackListPage"
        :total-count="feedbacksTotalCount"
        class="bg-white"
      />
    </div>
  </div>
</template>
