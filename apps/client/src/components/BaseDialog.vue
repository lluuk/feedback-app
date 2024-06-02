<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue';
import { Icon } from '@iconify/vue';

interface Props {
  title: string;
  modelValue: boolean;
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
});
</script>

<template>
  <div>
    <DialogRoot
      :open="modelValue"
      @update:open="$emit('update:model-value', $event)"
    >
      <DialogTrigger>
        <slot name="trigger" />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay
          class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
        />
        <DialogContent
          class="p-6 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
        >
          <DialogTitle class="text-black text-2xl m-0 font-medium mb-6">
            {{ title }}
          </DialogTitle>

          <div
            class="w-[calc(100%+48px)] h-[1px] bg-default-border-gray mb-6 -ml-6"
          />

          <div>
            <slot name="content" />
          </div>
          <DialogClose
            class="text-black hover:bg-green4 focus:shadow-green absolute top-6 right-[10px] inline-flex h-8 w-8 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Icon icon="lucide:x" />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>
