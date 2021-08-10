import {defineComponent} from 'vue';
import HeroSearch from '@/components/HeroSearch/HeroSearch.vue';
import {Hero} from '@/model/Hero';
import {PageRequest} from '@/utils/page';
import * as heroService from '@/service/HeroService';

export default defineComponent({
  components: {
    HeroSearch
  },

  data() {
    return {
      heroes: [] as Hero[],
    }
  },

  mounted() {
    this.getHeroes();
  },

  methods: {
    async getHeroes(): Promise<void> {
      const pageable = new PageRequest();
      pageable.size = 4;

      this.heroes = (await heroService.getHeroes(pageable)).content;
    }
  }
})