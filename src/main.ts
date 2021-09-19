import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {setupConfig, setupCustomComponents, setupElementUI, setupI18n} from './plugins'
import './assets/styles.scss'

const app = createApp(App)

// i18n
setupI18n(app)

// Element UI components
setupElementUI(app)

// custom global components
setupCustomComponents(app)

// application config
setupConfig(app)

// router
app.use(router)

app.mount('#app')