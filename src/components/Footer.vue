<template>
  <footer class="bg-bg-header py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col md:flex-row md:justify-between">
        <!-- Загальні посилання -->
        <div class="md:flex md:flex-col space-y-4 md:space-y-0 md:space-x-6">
          <div>
            <h3 class="text-lg font-semibold text-text-color mb-5 md:mb-0 md:text-left">Загальні посилання</h3>
          </div>
        </div>

        <!-- Теми блога -->
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold text-text-color">ТЕМИ БЛОГА</h3>
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
  }
};
</script>

<style scoped>
</style>
