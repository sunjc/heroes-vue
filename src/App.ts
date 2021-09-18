import {defineComponent} from 'vue'
import {ElCol, ElConfigProvider, ElContainer, ElHeader, ElMain, ElRadioButton, ElRadioGroup, ElRow} from 'element-plus'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  components: {
    ElCol,
    ElContainer,
    ElHeader,
    ElMain,
    ElRadioButton,
    ElRadioGroup,
    ElRow,
    [ElConfigProvider.name]: ElConfigProvider,
  },
  data() {
    return {
      locale: enLocale as any,
      localeName: enLocale.name,
      supportLocales: [
        {code: enLocale.name, label: 'English'},
        {code: zhLocale.name, label: '中文'}
      ]
    }
  },
  computed: {
    currentDate(): string {
      return this.$d(new Date())
    }
  },
  methods: {
    switchLocale(): void {
      this.$i18n.locale = this.localeName

      if (this.localeName === zhLocale.name) {
        this.locale = zhLocale
      } else {
        this.locale = enLocale
      }
    }
  }
})