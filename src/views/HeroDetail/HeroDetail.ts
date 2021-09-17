import {defineComponent, onMounted, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
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

  setup() {
    const route = useRoute()
    const router = useRouter()
    const hero = ref<Hero>({} as Hero)

    const getHero = async (): Promise<void> => {
      const id = parseInt(route.params.id as string, 10)
      hero.value = await heroService.getHero(id)
    }

    const goBack = (): void => {
      router.back()
    }

    const save = async (): Promise<void> => {
      if (hero.value) {
        await heroService.updateHero(hero.value)
        goBack()
      }
    }

    onMounted(async () => {
      await getHero()
    })

    return {
      hero,
      getHero,
      save,
      goBack
    }
  }
})