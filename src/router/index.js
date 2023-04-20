import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      layout: 'GreenLayout'
    }
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('@/pages/ResultPage.vue'),
    meta: {
      layout: 'YellowLayout'
    }
  },
  {
    path: '/rating',
    name: 'Rating',
    component: () => import('@/pages/RatingPage.vue'),
    meta: {
      layout: 'YellowLayout'
    }
  },
  {
    path: '/rating/:personId',
    name: 'InfoPerson',
    component: () => import('@/components/person/AppPersonInfo.vue'),
    meta: {
      layout: 'PinkLayout'
    }
  },
  {
    path: '/:404page(.*)',
    name: 'PageNotFound',
    component: () => import('@/pages/PageNotFound.vue'),
    meta: {
      layout: 'GreenLayout'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
