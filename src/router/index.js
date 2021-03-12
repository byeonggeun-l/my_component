import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Context_Menu_Original from '../views/Components/01_Context_Menu/Context_Menu_Original'
import Context_Menu_HTML_Details from '../views/Components/01_Context_Menu/Context_Menu_HTML_Details'
import Context_Menu_Vue from '../views/Components/01_Context_Menu/Context_Menu_Vue'
import Infinite_Scroll_Original from '../views/Components/02_Infinite_Scroll/Infinite_Scroll_Original'
import Infinite_Scroll_Debounce from '../views/Components/02_Infinite_Scroll/Infinite_Scroll_Debounce'
import Infinite_Scroll_Observer from '../views/Components/02_Infinite_Scroll/Infinite_Scroll_Observer'
import Scroll_Spy_Original from '../views/Components/03_Scroll_Spy/Scroll_Spy_Original'
import Scroll_Spy_Throttle from '../views/Components/03_Scroll_Spy/Scroll_Spy_Throttle'
import Scroll_Spy_IntersectionObserver from '../views/Components/03_Scroll_Spy/Scroll_Spy_IntersectionObserver'
import Scroll_Top_01 from '../views/Components/04_Scroll_Top/Scroll_Top_01'
import Scroll_Badges from '../views/Components/Example/Scroll_Badges'
import Scroll_Top_02 from '../views/Components/04_Scroll_Top/Scroll_Top_02'
import Visual_Section from '../views/Components/Example/VisualSection'
import SwiperVertical from '../views/Components/Example/SwiperVertical'
import Stop_Watch_01 from '../views/Components/05_Stop_Watch/Stop_Watch_01'

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
  {
    path: '/infinite_scroll_observer',
    name: 'infinite_scroll_observer',
    component: Infinite_Scroll_Observer
  },
  {
    path: '/scroll_spy_original',
    name: 'scroll_spy_original',
    component: Scroll_Spy_Original
  },
  {
    path: '/scroll_spy_throttle',
    name: 'scroll_spy_throttle',
    component: Scroll_Spy_Throttle
  },
  {
    path: '/scroll_spy_intersectionobserver',
    name: 'scroll_spy_intersectionobserver',
    component: Scroll_Spy_IntersectionObserver
  },
  {
    path: '/scroll_top_01',
    name: 'scroll_top_01',
    component: Scroll_Top_01
  },
  {
    path: '/scroll_badges',
    name: 'scroll_badges',
    component: Scroll_Badges
  },
  {
    path: '/scroll_top_02',
    name: 'scroll_top_02',
    component: Scroll_Top_02
  },
  {
    path: '/visual_section',
    name: 'visual_section',
    component: Visual_Section
  },
  {
    path: '/swiper_vertical',
    name: 'swiper_vertical',
    component: SwiperVertical
  },
  {
    path: '/stop_watch_01',
    name: 'stop_watch_01',
    component: Stop_Watch_01
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
  {
    path: '/my_component/scroll_spy_original',
    name: 'scroll_spy_original_github',
    component: Scroll_Spy_Original
  },
  {
    path: '/my_component/scroll_spy_throttle',
    name: 'scroll_spy_throttle_github',
    component: Scroll_Spy_Throttle
  },
  {
    path: '/my_component/scroll_spy_intersectionobserver',
    name: 'scroll_spy_intersectionobserver_github',
    component: Scroll_Spy_IntersectionObserver
  },
  {
    path: '/scroll_top_01',
    name: 'scroll_top_01_github',
    component: Scroll_Top_01
  },
  {
    path: '/scroll_badges',
    name: 'scroll_badges_github',
    component: Scroll_Badges
  },
  {
    path: '/scroll_top_02',
    name: 'scroll_top_02_github',
    component: Scroll_Top_02
  },
  {
    path: '/visual_section',
    name: 'visual_section_github',
    component: Visual_Section
  },
  {
    path: '/swiper_vertical',
    name: 'swiper_vertical_github',
    component: SwiperVertical
  },
  {
    path: '/stop_watch_01',
    name: 'stop_watch_01_github',
    component: Stop_Watch_01
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
