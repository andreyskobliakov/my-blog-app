<template>
    <div class="bg-bg-main mr-5 mt-2 rounded-lg flex justify-center items-center relative">
      <div class="border-t-4 border-l-4 absolute top-0 left-0 h-10 w-10 border-text-color"></div>
      <div class="border-t-4 border-r-4 absolute top-0 right-0 h-10 w-10 border-text-color"></div>
      <div class="border-b-4 border-l-4 absolute bottom-0 left-0 h-10 w-10 border-text-color"></div>
      <div class="border-b-4 border-r-4 absolute bottom-0 right-0 h-10 w-10 border-text-color"></div>
      <div class="w-full max-w-md">
        <h3 class="text-2xl font-semibold pb-5 text-text-color uppercase text-center">Category</h3>
        <ul class="space-y-2 text-center">
          <li v-for="category in categories" :key="category.id">
            <a
              :href="`/categories/${category.id}`"
              class="text-blue-500 hover:underline text-text-color hover:text-white"
            >
              {{ category.name }}
            </a>
          </li>
          <li><a href="#" class="text-text-color hover:text-white">First Child Category</a></li>
          <li><a href="#" class="text-text-color hover:text-white">One Grandchild Category</a></li>
          <li><a href="#" class="text-text-color hover:text-white">Parent</a></li>
          <li><a href="#" class="text-text-color hover:text-white">Second Child Category</a></li>
          <li><a href="#" class="text-text-color hover:text-white">Uncategorized</a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const categories = ref([]);
  
  onMounted(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/categories');
    categories.value = response.data;
  });
  </script>
  
  <style scoped>
  /* Ваши стили для компонента могут быть добавлены здесь */
  </style>
  