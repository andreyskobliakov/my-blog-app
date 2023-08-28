import { ref } from 'vue';
import axios from 'axios';

export function useSinglePost() {
  const post = ref({ image: '' });
  const comments = ref([]);
  const isLoadingComments = ref(true);

  const fetchComments = async () => {
    try {
      const postId = 1; // Здесь замените на реальный ID поста
      const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      comments.value = commentsResponse.data.slice(0, 5);
    } catch (error) {
      console.error('Помилка під час отримання комментарів:', error);
    }
  };

  const deleteComment = (commentId) => {
    const commentIndex = comments.value.findIndex(
      (comment) => comment.id === commentId
    );
    if (commentIndex !== -1) {
      comments.value.splice(commentIndex, 1);
    }
  };

  const fetchImage = async () => {
    try {
      const postId = 1; // Здесь замените на реальный ID поста
      const response = await fetch(`https://source.unsplash.com/400x300/?random=${postId}`);
      if (response.ok) {
        post.value.image = response.url;
      } else {
        console.error('Помилка під час отримання зображення');
      }
    } catch (error) {
      console.error('Помилка під час отримання зображення:', error);
    }
  };

  const handleCommentAdded = (newComment) => {
    comments.value.push(newComment);
  };

  return {
    post,
    comments,
    isLoadingComments,
    fetchComments,
    fetchImage,
    deleteComment,
    handleCommentAdded
  };
}
