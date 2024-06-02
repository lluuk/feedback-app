<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <header
    class="flex items-center justify-between py-2 px-4 border-b border-default-border-gray"
  >
    <img
      src="@/assets/images/logo.png"
      class="w-[70] h-[70]"
      alt="Feedback app logo"
    />
    <div class="flex gap-x-2 items-center">
      <BaseButton>All feedback</BaseButton>
      <BaseButton variant="secondary">New feedback</BaseButton>
    </div>
  </header>
</template>
