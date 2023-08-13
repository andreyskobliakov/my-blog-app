<template>
    <div class="border p-2 my-2">
      <h3 class="font-semibold">{{ comment.name }}</h3>
      <p>{{ comment.body }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    comment: Object
  });
  </script>
  