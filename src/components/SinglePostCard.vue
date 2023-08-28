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
import { useSinglePost } from '../composition/useSinglePost.js';
import AddCommentForm from './AddCommentsForm.vue';
import Button from './Button.vue';

const { post, comments, isLoadingComments, fetchComments, fetchImage, deleteComment, handleCommentAdded } = useSinglePost();

onMounted(async () => {
  await fetchComments();
  await fetchImage();
  isLoadingComments.value = false;
});

</script>

<style scoped>
</style>
