import {computed, defineComponent, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {
  enUS,
  NConfigProvider,
  NGi,
  NGrid,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NMessageProvider,
  NRadioButton,
  NRadioGroup,
  zhCN
} from 'naive-ui'
import {NLocale} from 'naive-ui/lib/locales/common/enUS'
import {themeOverrides} from './utils/theme'

export default defineComponent({
  components: {
    NConfigProvider,
    NGrid,
    NGi,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NMessageProvider,
    NRadioButton,
    NRadioGroup,
  },

  setup() {
    const {t, d, locale} = useI18n()
    const supportLocales = [
      {name: enUS.name, label: 'English'},
      {name: zhCN.name, label: '中文'}
    ]
    const nLocale = ref<NLocale>(zhCN)

    const currentDate = computed(() => d(new Date))

    const switchLocale = (): void => {
      if (nLocale.value.name === zhCN.name) {
        nLocale.value = zhCN
      } else {
        nLocale.value = enUS
      }
    }

    return {
      themeOverrides,
      t,
      locale,
      supportLocales,
      nLocale,
      currentDate,
      switchLocale
    }
  }
})