import { ref, onMounted } from 'vue';
import axios from 'axios';

export function usePostData(postId) {
  const post = ref({ image: '', rating: 0 });
  const authorName = ref('');
  const formattedDate = ref('');
  const comments = ref([]);
  const isLoadingComments = ref(true);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId.value}`);
      if (response.status === 200) {
        post.value = response.data;
      } else {
        console.error('Помилка під час отримання поста');
      }
    } catch (error) {
      console.error('Помилка під час отримання поста:', error);
    }
  };

  const fetchAuthor = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.value.userId}`);
      if (response.status === 200) {
        const authorData = response.data;
        authorName.value = authorData.name;
      } else {
        console.error('Помилка під час отримання автора');
      }
    } catch (error) {
      console.error('Помилка під час отримання автора:', error);
    }
  };

  const fetchImage = async () => {
    try {
      const response = await fetch(`https://source.unsplash.com/400x300/?random=${post.value.id}`);
      if (response.ok) {
        post.value.image = response.url;
      } else {
        console.error('Помилка під час отримання зображення');
      }
    } catch (error) {
      console.error('Помилка під час отримання зображення:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId.value}`);
      if (response.status === 200) {
        comments.value = response.data.slice(0, 5);
        isLoadingComments.value = false;
      } else {
        console.error('Помилка під час отримання коментарів');
      }
    } catch (error) {
      console.error('Помилка під час отримання коментарів:', error);
    }
  };

  onMounted(async () => {
    await fetchPost();
    await fetchAuthor();
    await fetchImage();
    await fetchComments();
  });

  return {
    post,
    authorName,
    formattedDate,
    comments,
    isLoadingComments,
    fetchPost,
    fetchAuthor,
    fetchImage,
    fetchComments
  };
}
