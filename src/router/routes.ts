import {RouteRecordRaw} from 'vue-router'
import Login from '../views/Login/Login.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import HeroDetail from '../views/HeroDetail/HeroDetail.vue'
import Heroes from '../views/Heroes/Heroes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: HeroDetail
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: Heroes
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About/About.vue')
  }
]

export default routes