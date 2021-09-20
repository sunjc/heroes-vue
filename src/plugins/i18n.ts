import {createI18n} from 'vue-i18n'
import {enUS} from 'naive-ui'
import {messages} from '../locale/messages'
import {App} from 'vue'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: enUS.name,
  fallbackLocale: enUS.name,
  messages,
})

export function setupI18n(app: App<Element>) {
  app.use(i18n)
}