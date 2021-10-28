import {RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard/Dashboard.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/HeroDetail/HeroDetail.vue')
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: () => import('../views/Heroes/Heroes.vue')
  },
  {
    path: '/task',
    name: 'task',
    component: () => import('../views/Task/Task.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/About.vue')
  }
]

export default routes