import {defineComponent, onMounted, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import HeroSearch from '../../components/HeroSearch/HeroSearch.vue'
import {Hero} from '../../model/Hero'
import {PageRequest} from '../../utils/page'
import * as heroService from '../../service/HeroService'

export default defineComponent({
  name: 'Dashboard',

  components: {
    HeroSearch
  },

  setup() {
    const {t} = useI18n()
    const heroes = ref<Hero[]>([])
    const pageable = new PageRequest(1, 4)

    async function getHeroes(): Promise<void> {
      heroes.value = (await heroService.getHeroes(pageable)).content
    }

    onMounted(async () => {
      await getHeroes()
    })

    return {
      t,
      heroes,
      getHeroes
    }
  }
})