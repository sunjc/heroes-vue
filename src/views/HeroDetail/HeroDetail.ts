import {defineComponent} from "vue";
import {Hero} from "@/model/Hero";
import * as heroService from "@/service/HeroService";

export default defineComponent({
  data() {
    return {
      hero: {} as Hero
    }
  },

  mounted() {
    this.getHero();
  },

  methods: {
    async getHero(): Promise<void> {
      const id = parseInt(this.$route.params.id as string, 10);
      this.hero = await heroService.getHero(id);
    },

    goBack(): void {
      this.$router.back();
    },

    async save(): Promise<void> {
      if (this.hero) {
        await heroService.updateHero(this.hero);
        this.goBack();
      }
    }
  }
})