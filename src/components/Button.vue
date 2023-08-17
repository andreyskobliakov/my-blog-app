<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: String,
});

const buttonClasses = computed(() => {
  switch (props.type) {
    case 'delete':
      return 'py-1 px-3 rounded bg-red-500 text-white';
    default:
      return 'py-1 px-3 rounded bg-blue-500 text-white';
  }
});
</script>
