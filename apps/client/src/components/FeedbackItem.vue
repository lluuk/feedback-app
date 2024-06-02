<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core';
import type { FeedbackWithId } from 'types';
import BugIcon from '@/assets/images/icons/bug.svg';
import SuggestionIcon from '@/assets/images/icons/suggestion.svg';

interface Props {
  feedback: FeedbackWithId;
  isSelected?: boolean;
  variant: 'short' | 'full';
}

const props = withDefaults(defineProps<Props>(), {
  isSelected: false,
  variant: 'short',
});

const formattedTimeAgo = useTimeAgo(props.feedback.createdAt as Date);
</script>

<template>
  <div
    v-if="variant === 'short'"
    class="flex p-2 justify-between gap-x-2 rounded-md cursor-pointer"
    :class="isSelected ? 'bg-light-gray' : 'bg-white'"
  >
    <div class="flex gap-x-2">
      <BugIcon v-if="feedback.type === 'bug'" />
      <SuggestionIcon v-else />
      <div class="flex flex-col gap-y-2">
        <div class="text-black font-medium">{{ feedback.title }}</div>
        <div class="text-defaul-text-gray text-xs font-medium">
          {{ feedback.name }}
        </div>
      </div>
    </div>
    <div class="text-defaul-text-gray text-xs self-end font-medium">
      {{ formattedTimeAgo }}
    </div>
  </div>
  <div v-else class="flex gap-x-2">
    <div>
      <BugIcon v-if="feedback.type === 'bug'" />
      <SuggestionIcon v-else />
    </div>
    <div class="flex flex-col gap-y-2">
      <div class="text-defaul-text-gray text-xs font-medium">
        {{ formattedTimeAgo }}
      </div>
      <div class="text-black text-2xl font-medium">{{ feedback.title }}</div>
      <div class="text-defaul-text-gray text-xs font-medium">
        {{ feedback.name }} ({{ feedback.email }})
      </div>

      <p v-html="feedback.message" />
    </div>
  </div>
</template>
