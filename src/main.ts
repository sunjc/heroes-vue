import {createApp} from 'vue'
import {createI18n} from 'vue-i18n'
import {ElButton, ElLoading, ElMessage, ElPagination} from 'element-plus'
import 'element-plus/dist/index.css'
import enLocale from 'element-plus/lib/locale/lang/en'
import './assets/styles.scss'
import './element-variables.scss'
import App from './App.vue'
import router from './router'
import axios from './utils/axios'
import {hasRole} from './service/AuthService'
import Pagination from './components/Pagination/Pagination.vue'
import {messages} from './locale/messages'
import {onError, onWarn} from './utils/exceptions'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: enLocale.name,
  fallbackLocale: enLocale.name,
  messages,
})

const app = createApp(App)
// router
app.use(router)

// Element UI components
app.use(ElButton)
app.use(ElLoading)
app.use(ElMessage)
app.use(ElPagination)

// i18n
app.use(i18n)

// global components
app.component('Pagination', Pagination)

// global properties
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$http = axios
app.config.globalProperties.$hasRole = hasRole
app.config.errorHandler = onError
app.config.warnHandler = onWarn

app.mount('#app')

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios
    $message: typeof ElMessage
    $hasRole: typeof Function
  }
}