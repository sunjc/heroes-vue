import {defineComponent} from 'vue';
import {Hero} from '@/model/Hero';
import {searchHeroes} from '@/service/HeroService';

export default defineComponent({
  name: 'HeroSearch',

  data() {
    return {
      heroes: [] as Hero[],
      name: ''
    }
  },

  methods: {
    async search() {
      if (!this.name) {
        this.heroes = [];
        return;
      }

      this.heroes = await searchHeroes(this.name);
    }
  }
})