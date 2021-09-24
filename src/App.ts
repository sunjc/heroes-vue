import {computed, defineComponent, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {dateEnUS, dateZhCN, enUS, zhCN} from 'naive-ui'
import {NLocale} from 'naive-ui/lib/locales/common/enUS'
import {NDateLocale} from 'naive-ui/lib/locales/date/enUS'
import MessageContent from './components/MessageContent/MessageContent.vue';
import {themeOverrides} from './utils/theme'

export default defineComponent({
  components: {
    MessageContent
  },

  setup() {
    const {t, d, locale} = useI18n()
    const supportLocales = [
      {name: enUS.name, label: 'English'},
      {name: zhCN.name, label: '中文'}
    ]
    const nLocale = ref<NLocale>(enUS)
    const nDateLocale = ref<NDateLocale>(dateZhCN)

    const currentDate = computed(() => d(new Date))

    function switchLocale(): void {
      if (locale.value === zhCN.name) {
        nLocale.value = zhCN
        nDateLocale.value = dateZhCN
      } else {
        nLocale.value = enUS
        nDateLocale.value = dateEnUS
      }

      document.title = t('message.title')
    }

    return {
      themeOverrides,
      t,
      locale,
      supportLocales,
      nLocale,
      nDateLocale,
      currentDate,
      switchLocale
    }
  }
})