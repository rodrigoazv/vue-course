import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CustomHeader from '../views/home/CustomHeader.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: CustomHeader
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
