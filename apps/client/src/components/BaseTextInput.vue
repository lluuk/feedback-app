<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

interface Props {
  type?: string;
  value?: string;
  name: string;
  label: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  type: 'text',
});

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <div
    :class="errorMessage ? 'text-red' : 'text-black'"
    class="flex flex-col gap-y-2 w-auto"
  >
    <label :for="name" class="font-medium text-sm sm:text-base">
      {{ label }}
    </label>
    <textarea
      v-if="type === 'textarea'"
      v-bind="$attrs"
      class="border rounded border-default-border-gray p-[5px]"
      :class="errorMessage ? 'border-red' : 'border-default-border-gray'"
      :name="name"
      :id="name"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
    <input
      v-else
      v-bind="$attrs"
      class="border rounded border-default-border-gray p-[5px]"
      :class="errorMessage ? 'border-red' : 'border-default-border-gray'"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />

    <p v-show="errorMessage" class="text-red text-sm sm:text-base">
      {{ errorMessage }}
    </p>
  </div>
</template>
