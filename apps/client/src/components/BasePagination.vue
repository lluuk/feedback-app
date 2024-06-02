<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
} from 'radix-vue';

interface Props {
  modelValue: number;
  totalCount: number;
}

defineProps<Props>();
</script>

<template>
  <PaginationRoot
    :total="totalCount"
    :sibling-count="1"
    show-edges
    :default-page="1"
    :page="modelValue"
    @update:page="$emit('update:model-value', $event)"
  >
    <PaginationList
      v-slot="{ items }"
      class="flex items-center gap-1 text-white border border-default-border-gray rounded"
    >
      <PaginationPrev
        class="w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded text-black"
      >
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          class="w-9 h-9 border rounded text-black data-[selected]:bg-green data-[selected]:border-green data-[selected]:text-white hover:bg-white/10xww transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1"
          :value="page.value"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
          class="w-9 h-9 flex items-center justify-center bg-white text-black"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext
        class="w-9 h-9 flex text-black items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"
      >
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>
