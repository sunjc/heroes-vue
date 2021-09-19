import {App} from 'vue'
import {useMessage} from 'naive-ui'
import axios from '../utils/axios'
import {onError, onWarn} from '../utils/exceptions'
import {hasRole} from '../service/AuthService'

const message = useMessage()

export function setupConfig(app: App<Element>) {
  app.config.globalProperties.$message = message
  app.config.globalProperties.$http = axios
  app.config.globalProperties.$hasRole = hasRole
  app.config.errorHandler = onError
  app.config.warnHandler = onWarn
}