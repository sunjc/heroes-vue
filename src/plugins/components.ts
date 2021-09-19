import {App} from 'vue'
import Pagination from '../components/Pagination/Pagination.vue'

export function setupCustomComponents(app: App<Element>) {
  app.component('Pagination', Pagination)
}