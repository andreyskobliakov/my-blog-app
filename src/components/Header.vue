<template>
  <header class="bg-bg-header p-4 flex justify-between items-center">
    <router-link to="/" class="text-white font-bold text-3xl block">{{ title }}</router-link>
    <nav class="flex items-center space-x-2">
      <router-link to="/" class="text-white hover:text-text-color text-lg block">{{ homeLink }}</router-link>
      <router-link to="/contacts" class="text-white hover:text-text-color text-lg block">{{ contactsLink }}</router-link>
    </nav>
    <div class="flex items-center space-x-2">
      <Social />
      <div class="text-white text-sm ml-2">
        {{ formattedDateTime }}
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { format, utcToZonedTime } from 'date-fns-tz';
import { uk } from 'date-fns/locale';
import { format as formatDate } from 'date-fns';
import Social from '../components/Social.vue';

const now = ref(new Date());
const timeZone = 'Europe/Kiev';

const formattedDateTime = computed(() => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone };
  const formattedDate = utcToZonedTime(now.value, timeZone);
  return formatDate(formattedDate, 'PPpp', { locale: uk });
});

setInterval(() => {
  now.value = new Date();
}, 1000);

const title = 'БЛОГ';
const homeLink = 'Головна';
const contactsLink = 'Контакти';
</script>

<style scoped>
</style>
