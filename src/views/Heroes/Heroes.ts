import {defineComponent} from "vue";
import {Hero} from "@/model/Hero";
import {PageRequest} from "@/utils/page";
import * as heroService from "@/service/HeroService";

export default defineComponent({
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
    getHeroes(): void {
      heroService.getHeroes(this.pageable).then(data => {
        this.heroes = data.content;
        this.totalItems = data.totalElements;
      });
    },

    pageChanged(page: number): void {
      this.pageable.page = page;
      this.getHeroes();
    },

    sizeChanged(size: number): void {
      this.pageable.size = size;
      this.getHeroes();
    },

    sortChanged(sort: { column: unknown, prop: string, order: string }): void {
      this.pageable.sort = sort;
      this.pageable.page = 1;
      this.getHeroes();
    },

    addHero(): void {
      if (!this.hero.name) {
        return;
      }

      heroService.addHero(this.hero as Hero).then(() => {
        this.pageable.page = 1;
        this.getHeroes();
        this.hero.name = '';
      });
    },

    deleteHero(id: number): void {
      heroService.deleteHero(id).then(() => {
        this.pageable.page = 1;
        this.getHeroes();
      });
    },

    formatter(row: Hero, column: unknown, cellValue: string, index: number) {
      return new Date(cellValue).toLocaleDateString();
    }
  }
})