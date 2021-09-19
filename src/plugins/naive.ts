import {App} from 'vue'
import {
  create,
  NButton,
  NConfigProvider,
  NDataTable,
  NForm,
  NFormItem,
  NGi,
  NGrid,
  NIcon,
  NInput,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NMessageProvider,
  NPagination,
  NRadioButton,
  NRadioGroup,
  NSpace
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NConfigProvider,
    NDataTable,
    NForm,
    NFormItem,
    NGi,
    NGrid,
    NIcon,
    NInput,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NMessageProvider,
    NPagination,
    NRadioButton,
    NRadioGroup,
    NSpace,
  ]
})

export function setupNaive(app: App<Element>) {
  app.use(naive);
}