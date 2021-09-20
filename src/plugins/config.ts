import {App} from 'vue'
import {useMessage} from 'naive-ui'
import {MessageApiInjection} from 'naive-ui/lib/message/src/MessageProvider';
import axios from '../utils/axios'
import {onError, onWarn} from '../utils/exceptions'
import {hasRole} from '../service/AuthService'

export function setupConfig(app: App<Element>) {
  app.config.globalProperties.$message = useMessage()
  app.config.globalProperties.$http = axios
  app.config.globalProperties.$hasRole = hasRole
  app.config.errorHandler = onError
  app.config.warnHandler = onWarn
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $message: MessageApiInjection
    $http: typeof axios
    $hasRole: typeof Function
  }
}