<script setup lang="ts">
import { computed } from 'vue';

type ButtonVariant = 'primary' | 'secondary';

interface Props {
  variant?: ButtonVariant;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
});

const buttonClasses = computed(() =>
  props.variant === 'primary' ? 'bg-green text-white' : 'bg-gray text-black',
);
</script>

<template>
  <button
    class="h-auto w-auto rounded text-sm px-[18px] py-[10px]"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>
