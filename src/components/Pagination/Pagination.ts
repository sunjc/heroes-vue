import {defineComponent} from 'vue';
import {DEFAULT_PAGE_SIZE, PAGE_SIZES} from '../../utils/page';
import {NPagination} from 'naive-ui';

export default defineComponent({
  name: 'Pagination',

  components: {
    NPagination
  },

  props: {
    page: {
      type: Number,
      default: 0
    },

    itemCount: {
      type: Number,
      required: true
    },

    pageSize: {
      type: Number,
      default: DEFAULT_PAGE_SIZE
    }
  },

  emits: ['pageChange', 'sizeChange'],

  data() {
    return {
      pageSizes: PAGE_SIZES
    }
  },

  methods: {
    pageChanged(page: number) {
      this.$emit('pageChange', page);
    },

    sizeChanged(size: number) {
      this.$emit('sizeChange', size)
    }
  }
})