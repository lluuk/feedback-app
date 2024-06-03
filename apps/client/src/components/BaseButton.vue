<script setup lang="ts">
import { computed } from 'vue';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md';

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
});

const buttonBgClasses = computed(() =>
  props.variant === 'primary' ? 'bg-green text-white' : 'bg-gray text-black',
);

const buttonSizeClasses = computed(() =>
  props.size === 'md' ? 'px-[18px] py-[10px]' : 'sm:text-xs px-2 py-1',
);
</script>

<template>
  <button
    class="h-auto w-auto rounded text-xs sm:text-sm"
    :class="[buttonBgClasses, buttonSizeClasses]"
  >
    <slot />
  </button>
</template>
