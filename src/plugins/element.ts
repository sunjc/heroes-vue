import {App} from 'vue'
import {ElButton, ElLoading, ElMessage, ElPagination} from 'element-plus'
import 'element-plus/dist/index.css'
import '../styles/element.scss'

export function setupElementUI(app: App<Element>) {
  app.use(ElButton)
  app.use(ElLoading)
  app.use(ElMessage)
  app.use(ElPagination)
}