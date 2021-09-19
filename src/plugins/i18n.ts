import {App} from 'vue'
import {createI18n} from 'vue-i18n'
import enLocale from 'element-plus/lib/locale/lang/en'
import {messages} from '../locale/messages'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: enLocale.name,
  fallbackLocale: enLocale.name,
  messages,
})

export function setupI18n(app: App<Element>) {
  app.use(i18n)
}