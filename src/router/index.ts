import {createRouter, createWebHistory} from 'vue-router'
import {isAuthenticated} from '../service/AuthService'
import routes from './routes'
import {getBaseUrl} from '../utils/env'

const ignorePaths = ['/login', '/about']

const router = createRouter({
  history: createWebHistory(getBaseUrl()),
  routes
})

router.beforeEach((to) => {
  if (!isIgnorePath(to.path) && !isAuthenticated()) {
    return router.push('/login')
  }
  return true
})

function isIgnorePath(path: string): boolean {
  return ignorePaths.indexOf(path) != -1
}

export default router
