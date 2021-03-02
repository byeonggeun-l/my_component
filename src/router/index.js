import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Infinite_Scroll_Original from '../views/Components/02_Infinite_Scroll/Infinite_Scroll_Original'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Default
  //Default
  //Default
  //Default
  //Default
  {
    path: '/infinite_scroll_original',
    name: 'infinite_scroll_original',
    component: Infinite_Scroll_Original
  },
  {
    path: '/infinite_scroll_original/',
    name: 'infinite_scroll_original',
    component: Infinite_Scroll_Original
  },
  //Default For Github
  //Default For Github
  //Default For Github
  //Default For Github
  //Default For Github
  {
    path: '/my_component/infinite_scroll_original',
    name: 'infinite_scroll_original',
    component: Infinite_Scroll_Original
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
