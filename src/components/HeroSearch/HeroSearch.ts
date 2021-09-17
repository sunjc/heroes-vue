import {defineComponent, ref} from 'vue';
import {NInput} from 'naive-ui';
import {Hero} from '../../model/Hero';
import {searchHeroes} from '../../service/HeroService';

export default defineComponent({
  name: 'HeroSearch',

  components: {
    NInput
  },

  setup() {
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
      heroes,
      name,
      search
    }
  }
})