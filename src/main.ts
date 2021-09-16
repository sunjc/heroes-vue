import {createApp} from 'vue'
import {createI18n} from 'vue-i18n';
import {enUS, useMessage} from 'naive-ui';
import App from './App.vue'
import router from './router'
import axios from './utils/axios';
import {hasRole} from './service/AuthService';
import Pagination from './components/Pagination/Pagination.vue';
import {messages} from './locale/messages';
import {onError, onWarn} from './utils/exceptions';
import './assets/styles.scss'
import {MessageApiInjection} from 'naive-ui/lib/message/src/MessageProvider';

const message = useMessage();

const i18n = createI18n({
  locale: enUS.name,
  fallbackLocale: enUS.name,
  messages,
})

const app = createApp(App)
// router
app.use(router)

// i18n
app.use(i18n)

// global components
app.component('Pagination', Pagination)

// global properties
app.config.globalProperties.$message = message;
app.config.globalProperties.$http = axios
app.config.globalProperties.$hasRole = hasRole;
app.config.errorHandler = onError;
app.config.warnHandler = onWarn;

app.mount('#app')

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios
    $message: MessageApiInjection
    $hasRole: typeof Function
  }
}