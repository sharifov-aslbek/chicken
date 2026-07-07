import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/mahsulotlar', name: 'products', component: ProductsPage },
  { path: '/mahsulotlar/:slug', name: 'product', component: ProductDetailPage },
  { path: '/biz-haqimizda', name: 'about', component: AboutPage },
  { path: '/boglanish', name: 'contact', component: ContactPage },
  { path: '/connect', redirect: '/boglanish' },
  { path: '/index.html' , redirect: '/#'  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Restore scroll only for in-session back/forward. On the initial
    // navigation (fresh open or refresh) `from` is empty — start at the top
    // instead of the browser-remembered position.
    if (savedPosition && from.matched.length) return savedPosition
    if (to.hash) return { el: to.hash, top: 90, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
