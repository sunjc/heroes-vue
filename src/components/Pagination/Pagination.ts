import {defineComponent} from 'vue'
import {DEFAULT_PAGE_SIZE, PAGE_SIZES} from '../../utils/page'

export default defineComponent({
  name: 'Pagination',

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

  setup(props, {emit}) {
    function pageChanged(page: number) {
      emit('pageChange', page)
    }

    function sizeChanged(size: number) {
      emit('sizeChange', size)
    }

    return {
      pageSizes: PAGE_SIZES,
      pageChanged,
      sizeChanged
    }
  }
})