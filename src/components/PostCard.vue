<template>
  <div class="border rounded-lg border-text-color p-5 my-3 hover:shadow-lg hover:ring-2 hover:ring-text-color hover:shadow-lg hover:ring-4 hover:ring-opacity-500">
    <h2 class="text-lg font-semibold text-text-color">{{ shortenedTitle }}</h2>
    <p v-if="showBody" class="text-sm text-gray-600 mt-2">{{ post.body }}</p>
    <div class="mt-2 text-center">
      <img
        v-if="post.image"
        :src="post.image"
        alt="Зображение поста"
        class="mx-auto"
      />
    </div>
    <div class="flex flex-col justify-between items-center mt-3">
      <div class="text-center">
        <p class="text-xs text-card-color-text">
          Автор: {{ authorName }}
        </p>
        <p class="text-xs text-card-color-text">
          Дата: {{ formattedDate }}
        </p>
      </div>
      <div class="flex items-center mt-2">
        <div
          class="mr-1 cursor-pointer"
          v-for="star in 5"
          :key="star"
          @click="setRating(star)"
        >
          <!-- ... остальной код для рейтинга ... -->
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center mt-3">
      <router-link :to="'/post/' + post.id" class="text-blue-500">
        <button class="text-white text-xs bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-2 rounded">
          Переглянути
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { usePostData } from '../composition/usePostData.js';

const props = defineProps({
  post: Object,
  author: String,
  date: String
});

const { post, authorName, formattedDate, shortenTitle, fetchImage, fetchAuthor } = usePostData(props.post.id);

const showBody = ref(false);

const setRating = (newRating) => {
  post.rating = newRating;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const shortenedTitle = ref(shortenTitle(props.post.title)); 

onMounted(async () => {
  await fetchImage();
  formattedDate.value = formatDate(props.post.date);
});
</script>

<style scoped>
/* ... другие стили ... */
</style>
