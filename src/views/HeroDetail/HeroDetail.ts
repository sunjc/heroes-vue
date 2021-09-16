import {defineComponent} from 'vue';
import {NButton, NForm, NFormItem, NInput, NSpace} from 'naive-ui';
import {Hero} from '../../model/Hero';
import * as heroService from '../../service/HeroService';

export default defineComponent({
  name: 'HeroDetail',

  components: {
    NButton,
    NForm,
    NFormItem,
    NInput,
    NSpace
  },

  data() {
    return {
      hero: {} as Hero
    }
  },

  async mounted() {
    await this.getHero();
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
        await heroService.updateHero(this.hero as Hero);
        this.goBack();
      }
    }
  }
})