import {defineComponent} from 'vue';
import {Hero} from '@/model/Hero';
import {PageRequest} from '@/utils/page';
import * as heroService from '@/service/HeroService';

export default defineComponent({
  name: 'Heroes',

  data() {
    return {
      heroes: [] as Hero[],
      hero: {} as Hero,
      pageable: new PageRequest(),
      totalItems: 0
    }
  },

  mounted() {
    this.getHeroes();
  },

  methods: {
    async getHeroes(): Promise<void> {
      const page = await heroService.getHeroes(this.pageable);
      this.heroes = page.content;
      this.totalItems = page.totalElements;
    },

    async pageChanged(page: number): Promise<void> {
      this.pageable.page = page;
      await this.getHeroes();
    },

    async sizeChanged(size: number): Promise<void> {
      this.pageable.size = size;
      await this.getHeroes();
    },

    async sortChanged(sort: { column: unknown, prop: string, order: string }): Promise<void> {
      this.pageable.sort = sort;
      this.pageable.page = 1;
      await this.getHeroes();
    },

    async addHero(): Promise<void> {
      if (!this.hero.name) {
        return;
      }

      await heroService.addHero(this.hero as Hero)
      this.pageable.page = 1;
      await this.getHeroes();
      this.hero.name = '';
    },

    async deleteHero(id: number): Promise<void> {
      await heroService.deleteHero(id);
      this.pageable.page = 1;
      await this.getHeroes();
    },

    formatter(row: Hero, column: unknown, cellValue: string, index: number) {
      return new Date(cellValue).toLocaleDateString();
    }
  }
})