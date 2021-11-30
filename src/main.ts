import './styles/index.scss'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {setupConfig, setupI18n} from './plugins'

const app = createApp(App)

// i18n
setupI18n(app)

// application config
setupConfig(app)

// router
app.use(router)

app.mount('#app')
