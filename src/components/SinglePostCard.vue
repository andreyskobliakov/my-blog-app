<template>
  <div>
    <div class="border p-4 my-4 rounded-lg shadow-md bg-white">
      <h2 class="text-xl font-semibold mb-2 text-text-color">{{ post.title }}</h2>
      <p class="text-blak-600">{{ post.body }}</p>
      <img v-if="post.image" :src="post.image" alt="Зображення поста" class="mt-4" />
      <div v-if="isLoadingComments">
        Завантаження коментарів...
      </div>
      <div v-else>
        <div v-for="comment in comments" :key="comment.id" class="mt-4">
          <div class="flex items-center">
            <div class="flex-shrink-0">
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                {{ comment.name }}
              </p>
              <p class="text-sm text-gray-600">
                {{ comment.body }}
              </p>
              <Button type="delete" @click="deleteComment(comment.id)">Видалити</Button>
            </div>
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
import Button from './Button.vue';

const route = useRoute();
const postId = ref(route.params.id);
const post = ref({ image: '' });
const comments = ref([]);
const isLoadingComments = ref(true);

onMounted(async () => {
  const [postResponse] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId.value}`),
  ]);

  post.value = postResponse.data;

  await fetchComments();
  await fetchImage();
  isLoadingComments.value = false;
});

const fetchComments = async () => {
  try {
    const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId.value}`);
    comments.value = commentsResponse.data.slice(0, 5);
  } catch (error) {
    console.error('Помилка під час отримання комментарів:', error);
  }
};

const handleCommentAdded = (newComment) => {
  comments.value.push(newComment);
};

const deleteComment = (commentId) => {
  const commentIndex = comments.value.findIndex(
    (comment) => comment.id === commentId
  );
  if (commentIndex !== -1) {
    comments.value.splice(commentIndex, 1);
  }
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
/* Стилі для компонента */
</style>
