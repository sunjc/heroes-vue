import {defineComponent, onMounted, ref} from 'vue';
import HeroSearch from '../../components/HeroSearch/HeroSearch.vue';
import {Hero} from '../../model/Hero';
import {PageRequest} from '../../utils/page';
import * as heroService from '../../service/HeroService';

export default defineComponent({
  name: 'Dashboard',

  components: {
    HeroSearch
  },

  setup() {
    const heroes = ref<Hero[]>([])
    const pageable = new PageRequest(1, 4);

    const getHeroes = async (): Promise<void> => {
      heroes.value = (await heroService.getHeroes(pageable)).content;
    }

    onMounted(async () => {
      await getHeroes()
    })

    return {
      heroes,
      getHeroes
    }
  }
})