
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
  {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index.vue'),
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.addRoute({
  path: '/vueapp',
  name: 'app',
  component: () => import('@/pages/items/vueapp')
})
router.addRoute({
  path: '/info',
  name: 'info',
  component: () => import('@/pages/items/info')
})

router.addRoute({
  path: '/info1',
  name: 'info1',
  component: () => import('@/pages/items/about')
})
router.addRoute({
  path: '/info4',
  name: 'info4',
  component: () => import('@/pages/items/head')
})
router.addRoute({
  path: '/search',
  name: 'search',
  component: () => import('@/pages/items/SearchGif')
})

export default router
