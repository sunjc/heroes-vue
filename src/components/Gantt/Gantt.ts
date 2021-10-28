import {defineComponent, onMounted, ref, toRefs, watch} from 'vue'
import {gantt} from 'dhtmlx-gantt'

export default defineComponent({
  name: 'Gantt',

  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    links: {
      type: Array,
      default() {
        return []
      }
    }
  },

  setup(props: any) {
    const ganttChart = ref<any>(null)
    const {data, links} = toRefs(props)

    function init() {
      gantt.i18n.setLocale('cn')
      gantt.i18n.setLocale({
        labels: {
          new_task: '新任务'
        }
      })

      gantt.config.xml_date = '%Y-%m-%d'
      gantt.config.date_format = '%Y-%m-%d'
      gantt.init(ganttChart.value)
    }

    watch([data, links], () => {
      gantt.parse({data: data.value, links: links.value})
    })

    onMounted(() => {
      init()
    })

    return {
      ganttChart
    }
  }

})