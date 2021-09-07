import {createRouter, createWebHistory} from 'vue-router'
import {isAuthenticated} from '../service/AuthService';
import routes from './routes';

const ignorePaths = ['/login', '/about']

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  if (!isIgnorePath(to.path) && !isAuthenticated()) {
    return router.push('/login');
  }
  return true;
})

function isIgnorePath(path: string): boolean {
  return ignorePaths.indexOf(path) != -1;
}

export default router
