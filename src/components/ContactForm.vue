<template>
  <div class="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-20 mb-20">
    <h2 class="text-2xl font-semibold mb-4">Форма зворотнього зв'язку</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-medium mb-2">Ім'я</label>
        <input
          v-model="name"
          type="text"
          id="name"
          name="name"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-gray-700 text-sm font-medium mb-2">Телефон</label>
        <input
          v-model="phone"
          type="tel"
          id="phone"
          name="phone"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-700 text-sm font-medium mb-2">Повідомлення</label>
        <textarea
          v-model="message"
          id="message"
          name="message"
          rows="4"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
          required
        ></textarea>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200"
        >
          Відправити
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Відправка форми', this.name, this.phone, this.message);
    },
  },
};
</script>

<style scoped>
</style>
