<script setup lang="ts">
import { Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { feedbackSchema } from 'validation';
import { Feedback, FeedbackTypeEnum } from 'types';
import { useToast } from 'vue-toastification';

import { useAxios } from '@vueuse/integrations/useAxios';

import BaseTextInput from '@/components/BaseTextInput.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';

import { axiosInstance } from '@/services/axios';
import { useFeedback } from '@/stores/feedback';

const { setFeedbacks, feedbacks } = useFeedback();

const selectOptions = Object.values(FeedbackTypeEnum);

const validationSchema = toTypedSchema(feedbackSchema);

const emits = defineEmits(['discard', 'submit']);

const toast = useToast();

const onSubmit = async (values: any) => {
  try {
    const { data } = await useAxios<{ feedback: Feedback }>(
      '/api/feedback',
      { method: 'POST', data: values },
      axiosInstance,
    );

    if (data.value?.feedback) {
      setFeedbacks([data.value.feedback, ...feedbacks.value]);
      toast.success('Feedback succesfully created!');
      emits('submit');
    }
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }
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
    <BaseSelect
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
