import {computed, defineComponent, onMounted, ref} from 'vue'
import Gantt from '../../components/Gantt/Gantt.vue'
import {useI18n} from 'vue-i18n'
import {zhCN} from 'naive-ui'
import {gantt} from 'dhtmlx-gantt';

export default defineComponent({
  name: 'Task',

  components: {
    Gantt
  },

  setup() {
    const {locale} = useI18n()
    const ganttLocale = computed(() => locale.value === zhCN.name ? 'cn' : 'en')

    const scales = [
      {unit: "month", step: 1, format: "%M, %Y"},
      {
        unit: "week", step: 1, format: function (date: Date) {
          return "Week #" + gantt.date.getWeek(date);
        }
      },
      {
        unit: "day", step: 1, format: "%D", css: function (date: Date) {
          if (!gantt.isWorkTime({date: date, unit: "day"})) {
            return "weekend"
          }
        }
      }
    ]

    const tasks = ref<any>([])
    const links = ref<any>([])

    function loadData() {
      tasks.value = [
        {id: 1, text: "Project #1", type: gantt.config.types.project, open: true},
        {id: 2, text: "Task #1", start_date: "2021-10-02", duration: 8, progress: 0.6, priority: '1', parent: 1},
        {id: 3, text: "Release", type: gantt.config.types.milestone, start_date: "2021-10-11", parent: 1,},
        {id: 4, text: "Task #2", start_date: "2021-10-12", duration: 8, progress: 0.6, priority: '2', parent: 1},
        {id: 5, text: "Project #2", start_date: "2021-10-11", duration: 5},
        {id: 6, text: "Task #1", start_date: "2021-10-11", duration: 3, progress: 0.1, priority: '3', parent: 5},
        {id: 7, text: "Task #2", start_date: "2021-10-12", duration: 4, progress: 0.5, parent: 5}
      ]

      links.value = [
        {id: 1, source: 1, target: 2, type: 1},
        {id: 2, source: 2, target: 3, type: 0},
        {id: 3, source: 3, target: 4, type: 0}
      ]
    }

    onMounted(() => {
      loadData()
    })

    return {
      ganttLocale,
      scales,
      tasks,
      links,
      loadData
    }
  }
})