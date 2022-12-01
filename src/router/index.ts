import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import AboutView from '@/views/About/AboutView.vue'
import ItemsPageStoreVersionVue from '@/views/ItemPageStoreVersion/ItemsPageStoreVersion.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/items',
    name: 'items',
    component: ItemsPageStoreVersionVue
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
