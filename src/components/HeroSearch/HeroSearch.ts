import {defineComponent, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {Hero} from '../../model/Hero'
import {searchHeroes} from '../../service/HeroService'

export default defineComponent({
  name: 'HeroSearch',

  setup() {
    const {t} = useI18n()
    const heroes = ref<Hero[]>([])
    const name = ref('')

    async function search() {
      if (!name.value) {
        heroes.value = []
        return
      }

      heroes.value = await searchHeroes(name.value)
    }

    return {
      t,
      heroes,
      name,
      search
    }
  }
})