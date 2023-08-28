<template>
  <Layout>
    <template v-slot:header>
      <Header />
    </template>

    <template v-slot:default>
      <router-view /> <!-- Это место для вставки контента страницы -->
    </template>

    <template v-slot:footer>
      <Footer/>
    </template>
  </Layout>
</template>


<script>
export default {
  name: "App",
};
</script>

<style>
/* Глобальные стили для всего приложения */
</style>
