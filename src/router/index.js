import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: 'Home'
  }, {
    name: 'Home',
    path: '/home',
    component: () => import(/* webpackChunkName: home */ 'views/home/Home')
  }, {
    name: 'Category',
    path: '/category',
    component: () => import(/* webpackChunkName: category */ 'views/category/Category')
  }, {
    name: 'Cart',
    path: '/cart',
    component: () => import(/* webpackChunkName: cart */ 'views/cart/Cart')
  }, {
    name: 'Profile',
    path: '/profile',
    component: () => import(/* webpackChunkName: profile */ 'views/profile/Profile')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
