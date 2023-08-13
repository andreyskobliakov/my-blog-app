<template>
  <div>
    <Header/>
    <div class="p-4">
      <SinglePostCard :post="post" :comments="comments" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Header from '../components/Header.vue';
import SinglePostCard from '../components/SinglePostCard.vue';

const route = useRoute();
const postId = ref(route.params.id);
const post = ref({});
const comments = ref([]);

onMounted(async () => {
  const [postResponse, commentsResponse] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId.value}`),
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId.value}`)
  ]);

  post.value = postResponse.data;
  comments.value = commentsResponse.data.slice(0, 5);
});
</script>
