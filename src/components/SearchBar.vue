<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      @input="search"
      placeholder="Поиск..."
      class="w-48 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <svg
      v-if="searchQuery"
      @click="clearSearch"
      class="absolute top-1/2 right-3 -mt-2 h-4 w-4 text-gray-500 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');

const search = () => {
  
};

const clearSearch = () => {
  searchQuery.value = '';
 
};
</script>

<style scoped>

</style>
