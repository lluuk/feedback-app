<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, toRef } from 'vue';
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
import { useField } from 'vee-validate';

interface Props {
  options: string[];
  value?: string;
  name: string;
  label: string;
  placeholder?: string;
}

const props = defineProps<Props>();

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});

const textColorClass = computed(() =>
  errorMessage.value ? 'text-red' : 'text-black',
);

const borderColorClass = computed(() =>
  errorMessage.value ? 'border-red' : 'border-default-border-gray',
);

const capitalize = (option: string) =>
  option && option[0].toUpperCase() + option.slice(1);
</script>

<template>
  <div class="flex flex-col gap-y-2 justify-between">
    <label :for="name" :class="textColorClass" class="font-medium">
      {{ label }}
    </label>
    <SelectRoot
      :model-value="inputValue"
      @update:model-value="handleChange"
      @blur="handleBlur"
      class="inline-flex"
    >
      <SelectTrigger
        class="inline-flex min-w-[160px] font-medium items-center justify-between rounded border pl-2 pr-[15px] text-sm leading-none h-[35px] gap-[5px] bg-whiteshadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"
        :class="[textColorClass, borderColorClass]"
        aria-label="Customise options"
      >
        <SelectValue :placeholder="placeholder" />
        <Icon icon="radix-icons:chevron-down" class="h-3.5 w-3.5" />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          class="min-w-[160px] bg-white rounded border shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
          :class="errorMessage ? 'border-red' : 'border-default-border-gray'"
          position="popper"
        >
          <SelectScrollUpButton
            class="flex items-center justify-center h-[25px] bg-white cursor-default"
            :class="textColorClass"
          >
            <Icon icon="radix-icons:chevron-up" />
          </SelectScrollUpButton>

          <SelectViewport class="p-[5px]">
            <SelectGroup>
              <SelectItem
                v-for="(option, index) in options"
                :key="index"
                class="leading-none text-sm text-black rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-defaul-text-gray data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green"
                :value="option"
              >
                <SelectItemIndicator
                  class="absolute left-0 w-[25px] inline-flex items-center justify-center"
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
            class="flex items-center justify-center h-[25px] bg-white cursor-default"
            :class="textColorClass"
          >
            <Icon icon="radix-icons:chevron-down" />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
    <p v-show="errorMessage" class="text-red">
      {{ errorMessage }}
    </p>
  </div>
</template>
