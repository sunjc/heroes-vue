import {createApp} from 'vue'
import {createI18n} from 'vue-i18n'
import {
  create,
  enUS,
  NButton,
  NDataTable,
  NForm,
  NFormItem,
  NIcon,
  NInput,
  NPagination,
  NSpace,
  useMessage
} from 'naive-ui'
import {MessageApiInjection} from 'naive-ui/lib/message/src/MessageProvider'
import App from './App.vue'
import router from './router'
import axios from './utils/axios'
import {onError, onWarn} from './utils/exceptions'
import {hasRole} from './service/AuthService'
import Pagination from './components/Pagination/Pagination.vue'
import {messages} from './locale/messages'
import './assets/styles.scss'

const message = useMessage()

const i18n = createI18n({
  legacy: false,
  locale: enUS.name,
  fallbackLocale: enUS.name,
  messages,
})

const naive = create({
  components: [
    NButton,
    NDataTable,
    NForm,
    NFormItem,
    NIcon,
    NInput,
    NPagination,
    NSpace
  ]
})

const app = createApp(App)
// router
app.use(router)

// i18n
app.use(i18n)

// Naive UI components
app.use(naive)

// custom global components
app.component('Pagination', Pagination)

// global properties
app.config.globalProperties.$message = message
app.config.globalProperties.$http = axios
app.config.globalProperties.$hasRole = hasRole
app.config.errorHandler = onError
app.config.warnHandler = onWarn

app.mount('#app')

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios
    $message: MessageApiInjection
    $hasRole: typeof Function
  }
}