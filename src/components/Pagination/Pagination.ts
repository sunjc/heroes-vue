import {defineComponent} from 'vue'
import {DEFAULT_PAGE_SIZE, PAGE_SIZES} from '../../utils/page'

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

  setup(props, {emit}) {
    function currentChanged(page: number) {
      emit('currentChange', page)
    }

    function sizeChanged(size: number) {
      emit('sizeChange', size)
    }

    return {
      pageSizes: PAGE_SIZES,
      currentChanged,
      sizeChanged
    }
  }
})