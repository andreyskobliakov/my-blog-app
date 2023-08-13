<template>
  <div>
    <div class="border p-4 my-4 rounded-lg shadow-md bg-white">
      <h2 class="text-xl font-semibold mb-2 text-text-color">{{ post.title }}</h2>
      <p class="text-blak-600">{{ post.body }}</p>
      <img v-if="post.image" :src="post.image" alt="Зображення поста" class="mt-4" />
      <div v-for="comment in comments" :key="comment.id" class="mt-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img :src="comment.avatar" alt="Аватар" class="h-10 w-10 rounded-full">
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              {{ comment.author }}
            </p>
            <div class="flex space-x-1">
              <svg v-for="star in 5" :key="star" class="w-4 h-4 text-yellow-400 fill-current">
                <path
                  d="M12 2l2.276 6.82h7.276l-5.878 4.437 2.276 6.822-5.878-4.438-5.878 4.438 2.277-6.822-5.878-4.437h7.277z"
                />
              </svg>
            </div>
            <p class="text-gray-500 text-sm">{{ formatDate(comment.date) }}</p>
            <p class="text-gray-600">{{ comment.body }}</p>
          </div>
        </div>
      </div>
    </div>
    <AddCommentForm @comment-added="handleCommentAdded" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import AddCommentForm from './AddCommentsForm.vue';

const route = useRoute();
const postId = ref(route.params.id);
const post = ref({ image: '' });
const comments = ref([]);

onMounted(async () => {
  const [postResponse, commentsResponse] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId.value}`),
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId.value}`)
  ]);

  post.value = postResponse.data;
  comments.value = commentsResponse.data.slice(0, 5);

  await fetchImage();
});

const handleCommentAdded = (newComment) => {
  
  comments.value.push(newComment);
};

const fetchImage = async () => {
  try {
   
    const response = await fetch(`https://source.unsplash.com/400x300/?random=${postId.value}`);
    if (response.ok) {
      post.value.image = response.url;
    } else {
      console.error('Помилка під час отримання зображення');
    }
  } catch (error) {
    console.error('Помилка під час отримання зображення:', error);
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};
</script>

<style scoped>
</style>
