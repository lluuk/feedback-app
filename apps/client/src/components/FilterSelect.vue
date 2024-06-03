<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue';

import { capitalize } from '@/lib/utils';

interface Props {
  options: string[];
  modelValue?: string;
  placeholder?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col gap-y-2 justify-between text-defaul-text-gray bg-gray"
  >
    <SelectRoot
      :model-value="modelValue"
      @update:model-value="$emit('update:model-value', $event)"
      @blur="$emit('blur')"
      class="inline-flex"
    >
      <SelectTrigger
        class="inline-flex items-center justify-between rounded p-2 text-xs leading-none gap-[5px] bg-gray shadow-black/10 data-[placeholder]:text-green9 outline-none"
        aria-label="Customise options"
      >
        <SelectValue :placeholder="placeholder" class="truncate" />
        <Icon icon="radix-icons:chevron-down" class="h-3.5 w-3.5" />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          class="text-sm bg-white rounded border shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100] border-default-border-gray"
          position="popper"
        >
          <SelectScrollUpButton
            class="flex items-center justify-center cursor-default"
          >
            <Icon icon="radix-icons:chevron-up" />
          </SelectScrollUpButton>

          <SelectViewport class="p-[5px]">
            <SelectGroup>
              <SelectItem
                v-for="(option, index) in options"
                :key="index"
                class="leading-none px-[15px] py-2 text-md text-black rounded-[3px] flex items-center relative select-none data-[disabled]:text-defaul-text-gray data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-black flex-grow"
                :value="option"
              >
                <SelectItemIndicator
                  class="absolute left-0 inline-flex items-center justify-center"
                >
                  <Icon icon="radix-icons:check" />
                </SelectItemIndicator>
                <SelectItemText>
                  {{ capitalize(option) }}
                </SelectItemText>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>

          <SelectScrollDownButton
            class="flex items-center justify-center cursor-default"
          >
            <Icon icon="radix-icons:chevron-down" />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
