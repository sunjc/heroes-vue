import {defineComponent} from 'vue';
import {DEFAULT_PAGE_SIZE, PAGE_SIZES} from '../../utils/page';

export default defineComponent({
  name: 'Pagination',

  props: {
    currentPage: {
      type: Number,
      default: 0
    },

    total: {
      type: Number,
      required: true
    },

    pageSize: {
      type: Number,
      default: DEFAULT_PAGE_SIZE
    }
  },

  emits: ['currentChange', 'sizeChange'],

  data() {
    return {
      pageSizes: PAGE_SIZES
    }
  },

  methods: {
    currentChanged(page: number) {
      this.$emit('currentChange', page);
    },

    sizeChanged(size: number) {
      this.$emit('sizeChange', size)
    }
  }
})