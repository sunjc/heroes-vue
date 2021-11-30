import {defineComponent, onMounted, reactive, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {Delete} from '@element-plus/icons'
import {Hero} from '../../model/Hero'
import {PageRequest} from '../../utils/page'
import * as heroService from '../../service/HeroService'

export default defineComponent({
  name: 'Heroes',

  components: {
    Delete
  },

  setup() {
    const {t} = useI18n()
    const heroes = ref<Hero[]>([])
    const hero = ref<Hero>({} as Hero)
    const total = ref(0)
    const pageable = reactive(new PageRequest())

    async function getHeroes(): Promise<void> {
      const page = await heroService.getHeroes(pageable)
      heroes.value = page.content
      total.value = page.totalElements
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

    async function sortChanged(sort: { prop: string, order: string }) {
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

    function formatter(row: Hero, column: unknown, cellValue: string) {
      return new Date(cellValue).toLocaleDateString()
    }

    onMounted(async () => {
      await getHeroes()
    })

    return {
      t,
      heroes,
      hero,
      pageable,
      total,
      pageChanged,
      sizeChanged,
      sortChanged,
      addHero,
      deleteHero,
      formatter,
      Delete
    }
  }
})
