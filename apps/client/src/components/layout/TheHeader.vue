<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseDialog from '@/components/BaseDialog.vue';
import AddFeedbackForm from '@/components/AddFeedbackForm.vue';

const isDialogOpen = ref(false);
</script>

<template>
  <header
    class="flex items-center justify-between py-4 px-4 border-b border-default-border-gray"
  >
    <img
      src="@/assets/images/logo.png"
      class="w-[70] h-[70]"
      alt="Feedback app logo"
    />
    <div class="flex gap-x-2 items-center">
      <BaseButton>All feedback</BaseButton>
      <BaseDialog title="Add new feedback" v-model="isDialogOpen">
        <template #trigger>
          <BaseButton variant="secondary">New feedback</BaseButton>
        </template>
        <template #content>
          <AddFeedbackForm
            @discard="isDialogOpen = false"
            @submit="isDialogOpen = false"
          />
        </template>
      </BaseDialog>
    </div>
  </header>
</template>
