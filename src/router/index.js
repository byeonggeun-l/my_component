import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Context_Menu_Original from '../views/Components/01_Context_Menu/Context_Menu_Original'
import Context_Menu_HTML_Details from '../views/Components/01_Context_Menu/Context_Menu_HTML_Details'
import Context_Menu_Vue from '../views/Components/01_Context_Menu/Context_Menu_Vue'
import Infinite_Scroll_Original from '../views/Components/02_Infinite_Scroll/Infinite_Scroll_Original'
import Infinite_Scroll_Debounce from '../views/Components/02_Infinite_Scroll/Infinite_Scroll_Debounce'

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
    path: '/Context_Menu_Original',
    name: 'Context_Menu_Original',
    component: Context_Menu_Original
  },
  {
    path: '/Context_Menu_HTML_Details',
    name: 'Context_Menu_HTML_Details',
    component: Context_Menu_HTML_Details
  },
  {
    path: '/Context_Menu_Vue',
    name: 'Context_Menu_Vue',
    component: Context_Menu_Vue
  },
  {
    path: '/infinite_scroll_original',
    name: 'infinite_scroll_original',
    component: Infinite_Scroll_Original
  },
  {
    path: '/infinite_scroll_debounce',
    name: 'infinite_scroll_debounce',
    component: Infinite_Scroll_Debounce
  },
  //Default For Github
  //Default For Github
  //Default For Github
  //Default For Github
  //Default For Github
  {
    path: '/my_component/Context_Menu_Original',
    name: 'Context_Menu_Original_Github',
    component: Context_Menu_Original
  },
  {
    path: '/my_component/Context_Menu_HTML_Details',
    name: 'Context_Menu_HTML_Details_Github',
    component: Context_Menu_HTML_Details
  },
  {
    path: '/my_component/Context_Menu_Vue',
    name: 'Context_Menu_Vue_Github',
    component: Context_Menu_Vue
  },
  {
    path: '/my_component/infinite_scroll_original',
    name: 'infinite_scroll_original_github',
    component: Infinite_Scroll_Original
  },
  {
    path: '/my_component/infinite_scroll_debounce',
    name: 'infinite_scroll_debounce_github',
    component: Infinite_Scroll_Debounce
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
