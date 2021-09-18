import {defineComponent, onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useI18n} from 'vue-i18n'
import {Hero} from '../../model/Hero'
import * as heroService from '../../service/HeroService'

export default defineComponent({
  name: 'HeroDetail',

  setup() {
    const {t} = useI18n()
    const route = useRoute()
    const router = useRouter()
    const hero = ref<Hero>({} as Hero)

    const getHero = async (): Promise<void> => {
      const id = parseInt(route.params.id as string, 10)
      hero.value = await heroService.getHero(id)
    }

    const goBack = (): void => {
      router.back()
    }

    const save = async (): Promise<void> => {
      if (hero.value) {
        await heroService.updateHero(hero.value)
        goBack()
      }
    }

    onMounted(async () => {
      await getHero()
    })

    return {
      t,
      hero,
      getHero,
      save,
      goBack
    }
  }
})