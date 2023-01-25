import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由模块
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'
import Login from '@/views/login/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/home',
    redirect: '/user/login'
  },
  {
    path: '/home',
    // redirect: '/home',
    component: Home
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/user/login',
    component: Login
  }
]

// 导航守卫
VueRouter.beforeEach((to, from, next) => {
  const tokenStr = localStorage.getItem('token')
  if (to.path === '/user/login' && !tokenStr) {
    next('/login')
  } else {
    next()
  }
})

const router = new VueRouter({
  routes
})

export default router
