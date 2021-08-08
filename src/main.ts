import {createApp} from 'vue'
import {
  ElButton,
  ElCol,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLoading,
  ElMain,
  ElMessage,
  ElPagination,
  ElRadioButton,
  ElRadioGroup,
  ElRow,
  ElTable,
  ElTableColumn
} from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'
import './assets/styles.scss'
import './element-variables.scss'
import App from './App.vue'
import router from './router'
import axios from "./utils/axios.config";
import {hasRole} from "@/service/AuthService";
import Pagination from "@/components/Pagination/Pagination.vue";
import {messages} from "@/locale/messages";
import {createI18n} from "vue-i18n";
import enLocale from "element-plus/lib/locale/lang/en";

const i18n = createI18n({
  locale: enLocale.name,
  fallbackLocale: enLocale.name,
  messages,
})


const app = createApp(App)

app.use(router)

// Element UI components
app.use(ElButton)
app.use(ElCol)
app.use(ElContainer)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElHeader)
app.use(ElInput)
app.use(ElLoading)
app.use(ElMain)
app.use(ElMessage)
app.use(ElPagination)
app.use(ElRadioButton)
app.use(ElRadioGroup)
app.use(ElRow)
app.use(ElTable)
app.use(ElTableColumn)

app.use(i18n)

app.component("Pagination", Pagination)

app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$http = axios
app.config.globalProperties.$hasRole = hasRole;

app.mount('#app')

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios
    $message: typeof ElMessage
    $hasRole: typeof Function
  }
}