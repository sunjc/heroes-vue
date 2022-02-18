import {computed, defineComponent, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  setup() {
    const {t, d, locale} = useI18n()
    const supportLocales = [
      {name: enLocale.name, label: 'English'},
      {name: zhLocale.name, label: '中文'}
    ]
    const elLocale = ref<any>(enLocale)

    const currentDate = computed(() => d(new Date))

    function switchLocale(): void {
      if (locale.value === zhLocale.name) {
        elLocale.value = zhLocale
      } else {
        elLocale.value = enLocale
      }
      document.title = t('message.title')
    }

    return {
      t,
      locale,
      supportLocales,
      elLocale,
      currentDate,
      switchLocale
    }
  }
})