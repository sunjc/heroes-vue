import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import {setupConfig, setupCustomComponents, setupI18n, setupNaive} from './plugins'
import './assets/styles.scss'

const app = createApp(App)

// i18n
setupI18n(app)

// Naive UI components
setupNaive(app)

// custom global components
setupCustomComponents(app)

// application config
setupConfig(app)

// router
app.use(router)

app.mount('#app')

document.title = import.meta.env.VITE_APP_TITLE