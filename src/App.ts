import {computed, defineComponent, ref} from 'vue';
import {useI18n} from 'vue-i18n';
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
} from 'naive-ui';
import {themeOverrides} from './utils/theme';

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
    const {d} = useI18n()
    const supportLocales = [
      {name: enUS.name, label: 'English'},
      {name: zhCN.name, label: '中文'}
    ]
    const locale = ref(zhCN)

    const currentDate = computed(() => d(new Date))

    const switchLocale = (): void => {
      if (locale.value.name === zhCN.name) {
        locale.value = zhCN;
      } else {
        locale.value = enUS;
      }
    }

    return {
      themeOverrides,
      supportLocales,
      locale,
      currentDate,
      switchLocale
    }
  }
})