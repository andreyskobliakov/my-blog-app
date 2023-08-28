<template>
  <footer class="bg-bg-header py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col md:flex-row md:justify-between">
        <!-- Загальні посилання -->
        <div class="md:flex md:flex-col space-y-4 md:space-y-0 md:space-x-6">
          <div>
            <h3 class="text-lg font-semibold text-text-color mb-5 md:mb-0 md:text-left">Загальні посилання</h3>
          </div>
          <!-- Добавьте свои общие ссылки здесь -->
        </div>

        <!-- Теми блога -->
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold text-text-color mb-5">ТЕМИ БЛОГА</h3>
          <ul class="list-none p-0">
            <li v-for="category in categories" :key="category.id">
              <a
                :href="`/categories/${category.id}`"
                class="text-text-color hover:text-white"
              >
                {{ category.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Зв'язок з нами и социальные сети -->
        <div class="md:flex md:flex-col space-y-4 md:space-y-0 md:space-x-6">
          <div>
            <h3 class="text-lg font-semibold text-text-color mb-5">Есть вопросы? Найдем ответы!</h3>
          </div>
          <div>
            <button class="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md focus:ring focus:ring-blue-200">
              Зв'язок з нами
            </button>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-text-color mt-5">Приєднуйтесь до нас!</h3>
            <!-- Компонент социальных сетей -->
            <Social class="mt-2" />
          </div>
          <div>
            <!-- Добавьте другой контент для связи с нами -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue';
import Social from '../components/Social.vue';

export default {
  components: {
    Social
  },
  setup() {
    const categories = ref([
      // Замените этот список на свои категории
      { id: 1, name: 'First Child Category' },
      { id: 2, name: 'One Grandchild Category' },
      { id: 3, name: 'Parent' },
      { id: 4, name: 'Second Child Category' },
      { id: 5, name: 'Uncategorized' }
      
      // ... добавьте остальные категории
    ]);

    return {
      categories
    };
  }
};
</script>

<style scoped>
/* Ваши стили для футера могут быть добавлены здесь */
</style>
