<script setup lang="ts">
import { onMounted, ref } from 'vue';

import TheHeader from '@/components/layout/TheHeader.vue';
import FeedbackList from '@/components/FeedbackList.vue';

import { useFeedback } from '@/stores/feedback';
import FeedbackItem from './components/FeedbackItem.vue';
import BaseButton from './components/BaseButton.vue';

const { feedbacks, selectedFeedback, getFeedbacks } = useFeedback();

const isHidden = ref(true);

onMounted(getFeedbacks);
</script>

<template>
  <div class="w-screen h-screen bg-light-gray">
    <TheHeader />
    <main class="flex">
      <aside
        class="md:w-[400px] h-[calc(100vh-103px)]"
        :class="isHidden ? 'w-[70px] overflow-hidden' : 'w-full'"
      >
        <BaseButton
          @click="isHidden = !isHidden"
          variant="secondary"
          size="sm"
          class="sm:none m-1"
        >
          {{ isHidden ? 'Show' : 'Hide' }}
        </BaseButton>
        <FeedbackList />
      </aside>
      <div
        class="flex bg-white p-10 justify-center w-full h-[calc(100vh-103px)] overflow-y-auto"
      >
        <p v-if="!feedbacks.length">Add your first feedback</p>
        <p v-else-if="!selectedFeedback">Select feedback to see details</p>
        <FeedbackItem
          v-else-if="selectedFeedback"
          :feedback="selectedFeedback"
          variant="full"
          class="flex-grow"
        />
      </div>
    </main>
  </div>
</template>
