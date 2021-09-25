import {App} from 'vue'
import {ElButton, ElLoading, ElMessage, ElPagination} from 'element-plus'
import '../element-variables.scss'
import 'element-plus/theme-chalk/src/index.scss'

export function setupElementUI(app: App<Element>) {
  app.use(ElButton)
  app.use(ElLoading)
  app.use(ElMessage)
  app.use(ElPagination)
}