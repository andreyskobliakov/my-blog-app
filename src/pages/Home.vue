<template>
  <Layout>
    <template v-slot:header>
      <Header />
    </template>

    <template v-slot:default>
      <div class="container">
        <div class="container flex items-center justify-between">
          <div class="header-logo">
            <h1 class="header-logo-title ml-2 text-3xl font-semibold text-text-color mt-5 ml-5">НАШ БЛОГ</h1>
          </div>
          <div class="header-search ml-auto mt-5">
            <!-- Здесь может быть ваша форма поиска -->
          </div>
        </div>
      </div>
      <div class="content-with-sidebar">
        <div class="content p-4">
          <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
            <PostCard
              v-for="(post, index) in displayedPosts"
              :key="post.id"
              :post="post"
            />
          </div>
          <div class="pagination flex justify-center mt-4">
            <button
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              @click="setCurrentPage(pageNumber)"
              :class="{
                'bg-text-color': currentPage === pageNumber,
                'text-white-500': currentPage !== pageNumber,
                'hover:bg-': currentPage !== pageNumber
              }"
              class="pagination-button mx-2 text-white p-2 rounded cursor-pointer"
            >
              {{ pageNumber }}
            </button>
          </div>
        </div>
        <div class="sidebar">
          <!-- Здесь может быть ваш блок категории -->
          <CategoryBlock />
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import PostCard from '../components/PostCard.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import CategoryBlock from '../components/CategoryBlock.vue'; // Импортируйте ваш компонент CategoryBlock

const posts = ref([]);
const postsPerPage = 4; // Изменили количество карточек на странице
const currentPage = ref(1);

const fetchData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  posts.value = response.data;
};

onMounted(() => {
  fetchData();
});

const displayedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return posts.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage));

const setCurrentPage = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
.content-with-sidebar {
  display: flex;
  justify-content: space-between;
}

.sidebar {
  flex: 1;
  padding: 20px;
  /* Ваши стили для блока категории */
}
</style>