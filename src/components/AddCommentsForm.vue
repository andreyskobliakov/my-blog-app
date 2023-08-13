<template>
  <div>
    <form class="bg-white p-4 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold mb-4">Додати коментар</h2>
      <div class="mb-4">
        <label for="author" class="block text-sm font-medium text-gray-700">Автор</label>
        <input
          v-model="author"
          type="text"
          id="author"
          name="author"
          autocomplete="off"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full block bg-input-background"
          required
        />
      </div>
      <div class="mb-4">
        <label for="comment" class="block text-sm font-medium text-gray-700">Коментар</label>
        <textarea
          v-model="comment"
          id="comment"
          name="comment"
          rows="3"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full block bg-input-background"
          required
        ></textarea>
      </div>
      <div class="text-right">
        <button
          @click.prevent="addComment"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring focus:ring-blue-200"
        >
          Додати
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: '',
      comment: '',
    };
  },
  methods: {
    addComment() {
      const newComment = {
        author: this.author,
        comment: this.comment,
      };
      this.$emit('comment-added', newComment);
      this.author = '';
      this.comment = '';
    },
  },
};
</script>

<style scoped>
</style>
