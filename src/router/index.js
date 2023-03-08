import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProjectPage from '../pages/ProjectPage.vue';

const routes = [
    {
        path : '/',
        component : HomePage
    },
    {
        path : '/about/',
        component : AboutPage
    },
    {
        path : '/contact/',
        component : ContactPage
    },
    {
        path : '/projects/',
        component : ProjectPage
    },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router