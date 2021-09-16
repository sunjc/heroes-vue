import {defineComponent, h} from 'vue';
import {NButton, NDataTable, NForm, NFormItem, NIcon, NInput} from 'naive-ui';
import {CloseCircleOutline} from '@vicons/ionicons5';
import {Hero} from '../../model/Hero';
import * as heroService from '../../service/HeroService';
import {PageRequest} from '../../utils/page';

export default defineComponent({
  name: 'Heroes',

  components: {
    NButton,
    NDataTable,
    NForm,
    NFormItem,
    NInput
  },

  data() {
    return {
      loading: true,
      heroes: [] as Hero[],
      hero: {} as Hero,
      pageable: new PageRequest(),
      itemCount: 0
    }
  },

  computed: {
    // @ts-ignore
    columns({deleteHero = this.deleteHero}) {
      return [
        {
          title: this.$t('message.no'),
          key: 'index',
          align: 'center',
          width: 45
        },
        {
          title: this.$t('message.name'),
          key: 'name',
          sorter: true,
          // @ts-ignore
          sortOrder: this.pageable.sort?.order,
          render(row: any) {
            return h('a', {href: `/detail/${row.id}`}, row.name);
          }
        },
        {
          title: this.$t('message.createdDate'),
          key: 'createdDate',
          align: 'center',
          width: 100,
          render(row: any): any {
            return h('span', {}, row.createdDate.substr(0, 10));
          }
        },
        {
          title: this.$t('message.delete'),
          align: 'center',
          width: 60,
          render(row: any): any {
            return h(
                NButton,
                {
                  bordered: false,
                  circle: true,
                  size: 'small',
                  onClick: async () => {
                    deleteHero(row.id)
                  }
                },
                {default: () => h(NIcon, {color: 'red', size: 24}, {default: () => h(CloseCircleOutline)})}
            )
          }
        }
      ];
    }
  },

  async mounted() {
    await this.getHeroes();
    this.loading = false;
  },

  methods: {
    async getHeroes(): Promise<void> {
      const page = await heroService.getHeroes(this.pageable);
      this.heroes = page.content.map((hero, index) => {
        hero.index = index + 1;
        return hero;
      });
      this.itemCount = page.totalElements;
    },

    async pageChanged(page: number): Promise<void> {
      this.pageable.page = page;
      await this.getHeroes();
    },

    async sizeChanged(size: number): Promise<void> {
      this.pageable.page = 1;
      this.pageable.size = size;
      await this.getHeroes();
    },

    async sortChanged(sort: { columnKey: string, order: string }) {
      this.pageable.sort = sort;
      this.pageable.page = 1;
      await this.getHeroes();
    },

    async addHero(): Promise<void> {
      if (!this.hero.name) {
        return;
      }

      await heroService.addHero(this.hero as Hero);
      this.pageable.page = 1;
      await this.getHeroes();
      this.hero.name = '';
    },

    async deleteHero(id: number): Promise<void> {
      await heroService.deleteHero(id);
      this.pageable.page = 1;
      await this.getHeroes();
    },

    rowKey(rowData: any) {
      return rowData.name;
    }
  }
})