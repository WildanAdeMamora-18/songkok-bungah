import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tentang',
      component: AboutView
    },
    {
      path: '/produk',
      component: ProductView
    },
    {
      path: '/galeri',
      component: GalleryView
    },
    {
      path: '/kontak',
      component: ContactView
    }
  ]
})

export default router
