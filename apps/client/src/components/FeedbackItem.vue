<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core';
import type { Feedback } from 'types';
import BugIcon from '@/assets/images/icons/bug.svg';
import SuggestionIcon from '@/assets/images/icons/suggestion.svg';

interface Props {
  feedback: Feedback;
  isSelected?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isSelected: false,
});

const formattedTimeAgo = useTimeAgo(props.feedback.createdAt as Date);
</script>

<template>
  <div
    class="flex p-2 justify-between gap-x-2 rounded-md"
    :class="isSelected ? 'bg-light-gray' : 'bg-white'"
  >
    <div class="flex gap-x-2">
      <BugIcon v-if="feedback.type === 'bug'" />
      <SuggestionIcon v-else />
      <div class="flex flex-col gap-y-2">
        <div class="text-black">{{ feedback.title }}</div>
        <div class="text-defaul-text-gray text-xs">{{ feedback.name }}</div>
      </div>
    </div>
    <div class="text-defaul-text-gray text-xs self-end">
      {{ formattedTimeAgo }}
    </div>
  </div>
</template>
