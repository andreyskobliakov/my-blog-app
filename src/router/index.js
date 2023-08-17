import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Contacts from "../pages/Contacts.vue";
import SinglePost from "../pages/SinglePost.vue";
import Layout from "../components/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "contacts",
        component: Contacts,
      },
      {
        path: "post/:id",
        component: SinglePost,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
