<template>
  <div class="border rounded-lg border-text-color p-10 my-5 hover:shadow-lg hover:ring-2 hover:ring-text-color hover:shadow-lg hover:ring-4 hover:ring-opacity-500">
    <h2 class="text-xl font-semibold text-text-color">{{ shortenedTitle }}</h2>
    <p v-if="showBody" class="text-gray-600 mt-2">{{ post.body }}</p>
    <img v-if="post.image" :src="post.image" alt="Зображення поста" class="mt-2" />
    <div class="flex flex-col justify-between items-center mt-4">
      <div class="text-center">
        <p class="text-card-color-text text-sm">
          Автор: {{ authorName }}
        </p>
        <p class="text-card-color-text text-sm">
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
          <svg
            class="w-5 h-5 text-re-color fill-current"
            v-bind:class="{ 'text-re-color-top': post.rating >= star }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2l2.276 6.82h7.276l-5.878 4.437 2.276 6.822-5.878-4.438-5.878 4.438 2.277-6.822-5.878-4.437h7.277z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center mt-4">
      <router-link :to="'/post/' + post.id" class="text-blue-500">
        <button class="text-white bg-transparent border border-blue-500 text-white hover:bg-blue-500 hover:text-white py-2 px-4 rounded">
          Переглянути
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const showBody = ref(false);
const props = defineProps({
  post: Object,
  author: String,
  date: String
});

const setRating = (newRating) => {
  props.post.rating = newRating;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};


const shortenTitle = (title) => {
  const words = title.split(' ');
  return words.slice(0, 4).join(' ');
};

const shortenedTitle = ref(shortenTitle(props.post.title)); 

onMounted(async () => {
  await fetchImage();
  formattedDate.value = formatDate(props.post.date);
});

const fetchImage = async () => {
  try {
    
    const response = await fetch(`https://source.unsplash.com/400x300/?random=${props.post.id}`);
    if (response.ok) {
      props.post.image = response.url;
    } else {
      console.error('Помилка під час отримання зображення');
    }
  } catch (error) {
    console.error('Помилка під час отримання зображення:', error);
  }
};

const authorName = ref(''); 

const fetchAuthor = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.post.userId}`);
    if (response.status === 200) {
      const authorData = await response.json();
      authorName.value = authorData.name;
    } else {
      console.error('Ошибка при получении данных об авторе');
    }
  } catch (error) {
    console.error('Ошибка при получении данных об авторе:', error);
  }
};

onMounted(async () => {
  await fetchAuthor();
});

</script>

<style scoped>
</style>
