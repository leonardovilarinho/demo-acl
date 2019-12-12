import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      rule: 'isEditor'
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      rule: 'isAdmin'
    }
  },
  {
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue'),
    meta: {
      rule: '*'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
