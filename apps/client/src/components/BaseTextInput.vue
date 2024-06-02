<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

interface Props {
  type: string;
  value: string;
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
</script>

<template>
  <div
    :class="errorMessage ? 'text-red' : 'text-black'"
    class="flex flex-col gap-y-2 w-auto"
  >
    <label :for="name">{{ label }}</label>
    <input
      v-bind="$attrs"
      class="border rounded border-default-border-gray h-9 px-2"
      :class="errorMessage ? 'border-red' : 'border-default-border-gray'"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />

    <p v-show="errorMessage" class="text-red">
      {{ errorMessage }}
    </p>
  </div>
</template>
