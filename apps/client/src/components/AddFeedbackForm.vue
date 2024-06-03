<script setup lang="ts">
import { Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { feedbackSchema } from 'validation';
import { FeedbackTypeEnum } from 'types';

import BaseTextInput from '@/components/BaseTextInput.vue';
import FormSelect from '@/components/FormSelect.vue';
import BaseButton from '@/components/BaseButton.vue';

import { useFeedback } from '@/stores/feedback';

const { createNewFeedback } = useFeedback();

const selectOptions = Object.values(FeedbackTypeEnum);

const validationSchema = toTypedSchema(feedbackSchema);

const emits = defineEmits(['discard', 'submit']);

const onSubmit = async (values: any) => {
  await createNewFeedback(values);
  emits('submit');
};
</script>

<template>
  <Form
    :validation-schema="validationSchema"
    @submit="onSubmit"
    class="flex flex-col gap-y-4"
  >
    <BaseTextInput label="Name" name="name" class="max-w-[300px]" />
    <BaseTextInput
      label="Email"
      name="email"
      type="email"
      class="max-w-[300px]"
    />
    <FormSelect
      :options="selectOptions"
      placeholder="Select value"
      name="type"
      label="Type"
      class="max-w-[300px]"
    />
    <BaseTextInput label="Title" name="title" class="max-w-[300px]" />
    <BaseTextInput label="Message" name="message" type="textarea" rows="4" />
    <div class="flex gap-x-2 justify-end items-center mt-2">
      <BaseButton variant="secondary" @click="$emit('discard')">
        Discard
      </BaseButton>
      <BaseButton type="submit">Send feedback</BaseButton>
    </div>
  </Form>
</template>
