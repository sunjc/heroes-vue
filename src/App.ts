import {defineComponent} from 'vue';
import {
  enUS,
  NConfigProvider,
  NGi,
  NGrid,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
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
    NRadioButton,
    NRadioGroup,
  },

  data() {
    return {
      themeOverrides,
      locale: enUS as any,
      localeName: enUS.name,
      supportLocales: [
        {code: enUS.name, label: 'English'},
        {code: zhCN.name, label: '中文'}
      ]
    }
  },

  computed: {
    currentDate(): string {
      return this.$d(new Date());
    }
  },

  methods: {
    switchLocale(): void {
      this.$i18n.locale = this.localeName;

      if (this.localeName === zhCN.name) {
        this.locale = zhCN;
      } else {
        this.locale = enUS;
      }
    }
  }
})