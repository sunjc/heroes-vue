import {defineComponent} from 'vue';
import {ElConfigProvider} from 'element-plus';
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  components: {
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
      return new Date().toLocaleDateString();
    }
  },
  methods: {
    switchLocale(): void {
      this.$i18n.locale = this.localeName;

      if (this.localeName === zhLocale.name) {
        this.locale = zhLocale;
      } else {
        this.locale = enLocale;
      }
    }
  }
})