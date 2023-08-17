<template>
  <div class="text-center">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'facebook']" class="bg-blue-400 text-white p-2 m-1 w-5 h-5"></font-awesome-icon>
    </a>
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'youtube']" class="bg-red-500 text-white p-2 m-1 w-5 h-5"></font-awesome-icon>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'instagram']" class="bg-blue-400 text-white p-2 m-1 w-5 h-5"></font-awesome-icon>
    </a>
  </div>
</template>

  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
  
  
  library.add(faFacebook, faYoutube, faInstagram);
  
  export default {
    name: 'SocialMediaButtons',
    components: {
      FontAwesomeIcon
    }
  }
  </script>
  
  <style scoped>
  </style>
  