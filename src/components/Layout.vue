<template>
  <div class="layout">
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* Стили для лейаута */
</style>
