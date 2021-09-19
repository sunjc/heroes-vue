import {App} from 'vue'
import {create, NButton, NDataTable, NForm, NFormItem, NIcon, NInput, NPagination, NSpace} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NDataTable,
    NForm,
    NFormItem,
    NIcon,
    NInput,
    NPagination,
    NSpace
  ]
})

export function setupNaive(app: App<Element>) {
  app.use(naive);
}