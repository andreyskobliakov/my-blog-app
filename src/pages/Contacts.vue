<template>
  <Layout>
    <template v-slot:header>
      <Header />
    </template>

    <template v-slot:default>
      <div class="p-4">
        <div class="contact-form">
          <ContactForm />
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <footer />
    </template>
  </Layout>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>

<style scoped>
</style>
