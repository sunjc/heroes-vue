import {defineComponent, onMounted, ref, toRefs, watch} from 'vue'
import {gantt} from 'dhtmlx-gantt'

export default defineComponent({
  name: 'Gantt',

  props: {
    locale: {
      type: String,
      default: 'en'
    },
    columns: {
      type: Array,
      default() {
        return [
          {name: "text", tree: true, width: '*'},
          {name: "start_date", align: "center"},
          {name: "duration", align: "center"},
          {name: "add", label: ""}
        ]
      }
    },
    scales: Array,
    tasks: {
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
    },

  },

  setup(props: any) {
    const ganttChart = ref<any>(null)
    const {locale, columns, tasks, links} = toRefs(props)

    function init() {
      gantt.i18n.setLocale({
        labels: {
          new_task: ''
        }
      })

      gantt.config.xml_date = '%Y-%m-%d'
      gantt.config.date_format = '%Y-%m-%d'

      gantt.config.columns = columns.value

      gantt.config.scale_height = 60
      if (props.scales) {
        gantt.config.scales = props.scales
      }

      // @ts-ignore
      gantt.templates.task_class = function (start, end, task) {
        switch (task.priority) {
          case "1":
            return "high";
          case "2":
            return "medium";
          case "3":
            return "low";
        }
      }

      gantt.init(ganttChart.value)
    }

    watch(locale, () => {
      gantt.i18n.setLocale(locale.value)
      gantt.render()
    })

    watch([tasks, links], () => {
      gantt.parse({data: tasks.value, links: links.value})
    })

    onMounted(() => {
      init()
    })

    return {
      ganttChart
    }
  }

})