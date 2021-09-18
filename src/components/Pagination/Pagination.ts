import {defineComponent} from 'vue'
import {NPagination} from 'naive-ui'
import {DEFAULT_PAGE_SIZE, PAGE_SIZES} from '../../utils/page'

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

  setup(props, context) {
    const pageChanged = (page: number) => {
      context.emit('pageChange', page)
    }

    const sizeChanged = (size: number) => {
      context.emit('sizeChange', size)
    }

    return {
      pageSizes: PAGE_SIZES,
      pageChanged,
      sizeChanged
    }
  }
})