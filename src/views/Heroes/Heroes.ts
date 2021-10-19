import {computed, defineComponent, h, onMounted, reactive, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {NButton, NIcon} from 'naive-ui'
import {CloseCircleOutline} from '@vicons/ionicons5'
import {Hero} from '../../model/Hero'
import * as heroService from '../../service/HeroService'
import {PageRequest} from '../../utils/page'
import {renderRouterLink, rowClass} from '../../utils/common'

export default defineComponent({
  name: 'Heroes',

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
          return renderRouterLink(`/detail/${row.id}`, row.name)
        }
      },
      {
        title: t('message.createdDate'),
        key: 'createdDate',
        align: 'center',
        width: 100,
        render(row: any): any {
          return h('span', row.createdDate.substr(0, 10))
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
                  await deleteHero(row.id)
                }
              },
              {default: () => h(NIcon, {color: 'red', size: 24}, {default: () => h(CloseCircleOutline)})}
          )
        }
      }
    ]))

    async function getHeroes(): Promise<void> {
      const page = await heroService.getHeroes(pageable)
      heroes.value = page.content
      itemCount.value = page.totalElements
    }

    async function pageChanged(page: number): Promise<void> {
      pageable.page = page
      await getHeroes()
    }

    async function sizeChanged(size: number): Promise<void> {
      pageable.page = 1
      pageable.size = size
      await getHeroes()
    }

    async function sortChanged(sort: { columnKey: string, order: string }) {
      pageable.sort = sort
      pageable.page = 1
      await getHeroes()
    }

    async function addHero(): Promise<void> {
      if (!hero.value.name) {
        return
      }

      await heroService.addHero(hero.value)
      pageable.page = 1
      await getHeroes()
      hero.value.name = ''
    }

    async function deleteHero(id: number): Promise<void> {
      await heroService.deleteHero(id)
      pageable.page = 1
      await getHeroes()
    }

    function rowKey(rowData: any) {
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
      rowClass,
      pageChanged,
      sizeChanged,
      sortChanged,
      addHero,
      deleteHero
    }
  }
})

