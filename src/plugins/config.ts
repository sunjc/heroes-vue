import {App} from 'vue'
import axios from '../utils/axios'
import {onError, onWarn} from '../utils/exceptions'
import {hasRole} from '../service/AuthService'

export function setupConfig(app: App<Element>) {
  app.config.globalProperties.$http = axios
  app.config.globalProperties.$hasRole = hasRole
  app.config.errorHandler = onError
  app.config.warnHandler = onWarn
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios
    $hasRole: typeof Function
  }
}