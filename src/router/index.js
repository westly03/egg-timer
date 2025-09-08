import { createRouter, createWebHashHistory } from 'vue-router'
import Menu from '../components/Menu.vue'
import Start from '../components/Start.vue'
import Timer from '../components/Timer.vue'

const routes = [
  {
    path: '/menu',
    component: Menu,
  },
  {
    path: '/timer/:type',
    component: Timer,
  },
  {
    path: '/',
    component: Start,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
