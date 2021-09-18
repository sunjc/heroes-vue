import {computed, defineComponent, h, onMounted, reactive, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {NButton, NDataTable, NForm, NFormItem, NIcon, NInput} from 'naive-ui'
import {CloseCircleOutline} from '@vicons/ionicons5'
import {Hero} from '../../model/Hero'
import * as heroService from '../../service/HeroService'
import {PageRequest} from '../../utils/page'

export default defineComponent({
  name: 'Heroes',

  components: {
    NButton,
    NDataTable,
    NForm,
    NFormItem,
    NInput
  },

  setup() {
    const {t} = useI18n()
    const loading = ref(true)
    const heroes = ref<Hero[]>([])
    const hero = ref<Hero>({} as Hero)
    const itemCount = ref(0)
    const pageable = reactive(new PageRequest())

    const columns = computed(() => ([
      {
        title: t('message.no'),
        align: 'center',
        width: 45,
        render(row: any, index: number) {
          return h('span', index + 1)
        }
      },
      {
        title: t('message.name'),
        key: 'name',
        sorter: true,
        sortOrder: pageable.sort?.order,
        render(row: any) {
          return h('a', {href: `/detail/${row.id}`}, row.name)
        }
      },
      {
        title: t('message.createdDate'),
        key: 'createdDate',
        align: 'center',
        width: 100,
        render(row: any): any {
          return h('span', {}, row.createdDate.substr(0, 10))
        }
      },
      {
        title: t('message.delete'),
        align: 'center',
        width: 60,
        render(row: any): any {
          return h(
              NButton,
              {
                bordered: false,
                circle: true,
                size: 'small',
                onClick: async () => {
                  deleteHero(row.id)
                }
              },
              {default: () => h(NIcon, {color: 'red', size: 24}, {default: () => h(CloseCircleOutline)})}
          )
        }
      }
    ]))

    const getHeroes = async (): Promise<void> => {
      const page = await heroService.getHeroes(pageable)
      heroes.value = page.content
      itemCount.value = page.totalElements
    }

    const pageChanged = async (page: number): Promise<void> => {
      pageable.page = page
      await getHeroes()
    }

    const sizeChanged = async (size: number): Promise<void> => {
      pageable.page = 1
      pageable.size = size
      await getHeroes()
    }

    const sortChanged = async (sort: { columnKey: string, order: string }) => {
      pageable.sort = sort
      pageable.page = 1
      await getHeroes()
    }

    const addHero = async (): Promise<void> => {
      if (!hero.value.name) {
        return
      }

      await heroService.addHero(hero.value)
      pageable.page = 1
      await getHeroes()
      hero.value.name = ''
    }

    const deleteHero = async (id: number): Promise<void> => {
      await heroService.deleteHero(id)
      pageable.page = 1
      await getHeroes()
    }

    const rowKey = (rowData: any) => {
      return rowData.id
    }

    onMounted(async () => {
      await getHeroes()
      loading.value = false
    })

    return {
      t,
      loading,
      columns,
      heroes,
      hero,
      pageable,
      itemCount,
      rowKey,
      pageChanged,
      sizeChanged,
      sortChanged,
      addHero,
      deleteHero
    }
  }
})

