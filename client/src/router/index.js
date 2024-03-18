import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import signup from '@/views/signup.vue'
import home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: signup
    }
  ]
})

export default router
