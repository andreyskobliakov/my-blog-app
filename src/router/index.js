import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import SinglePost from '../pages/SinglePost.vue';
import Contact from '../pages/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/post/:id', component: SinglePost, props: true },
  { path: '/contacts', component: Contact },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'SinglePost',
    component: SinglePost
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
