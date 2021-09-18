import {defineComponent, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {NInput} from 'naive-ui'
import {Hero} from '../../model/Hero'
import {searchHeroes} from '../../service/HeroService'

export default defineComponent({
  name: 'HeroSearch',

  components: {
    NInput
  },

  setup() {
    const {t} = useI18n()
    const heroes = ref<Hero[]>([])
    const name = ref('')

    const search = async () => {
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