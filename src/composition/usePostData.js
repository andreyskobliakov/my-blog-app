import { ref, onMounted } from 'vue';
import axios from 'axios';

export function usePostData(postId) {
  const post = ref({ image: '', rating: 0 });
  const authorName = ref('');
  const formattedDate = ref('');

  const fetchImage = async () => {
    try {
      const response = await fetch(`https://source.unsplash.com/400x300/?random=${postId}`);
      if (response.ok) {
        post.value.image = response.url;
      } else {
        console.error('Ошибка при получении изображения');
      }
    } catch (error) {
      console.error('Ошибка при получении изображения:', error);
    }
  };

  const fetchAuthor = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.value.userId}`);
      if (response.status === 200) {
        const authorData = response.data;
        authorName.value = authorData.name;
      } else {
        console.error('Ошибка при получении данных об авторе');
      }
    } catch (error) {
      console.error('Ошибка при получении данных об авторе:', error);
    }
  };

  const shortenTitle = (title) => {
    const words = title.split(' ');
    return words.slice(0, 4).join(' ');
  };

  onMounted(async () => {
    await fetchAuthor();
    await fetchImage(); // Вызываем fetchImage после fetchAuthor
  });

  return {
    post,
    authorName,
    formattedDate,
    shortenTitle,
    fetchAuthor
  };
}
