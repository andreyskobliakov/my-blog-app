<template>
  <Layout>
    <template v-slot:header>
      <Header />
    </template>

    <template v-slot:default>
      <div class="p-4">
        <SinglePostCard :post="post" :comments="comments" />
      </div>
    </template>

    <template v-slot:footer>
      <footer />
    </template>
  </Layout>
</template>

<script setup>
import { useRoute } from 'vue-router';
import SinglePostCard from '../components/SinglePostCard.vue';
import { useSinglePost } from '../composition/useSinglePost.js';

const route = useRoute();
const postId = route.params.id;
const { post, comments } = useSinglePost(postId);
</script>
