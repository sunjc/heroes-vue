import {defineComponent, onMounted, ref} from 'vue'
import Gantt from '../../components/Gantt/Gantt.vue'

export default defineComponent({
  name: 'Task',

  components: {
    Gantt
  },

  setup() {
    const data = ref<any>([])
    const links = ref<any>([])

    function loadData() {
      data.value = [
        {id: 1, text: "Project #2", start_date: "2021-10-01", duration: 18},
        {id: 2, text: "Task #1", start_date: "2021-10-02", duration: 8, progress: 0.6, parent: 1},
        {id: 3, text: "Task #2", start_date: "2021-10-11", duration: 8, progress: 0.6, parent: 1}
      ]

      links.value = [
        {id: 1, source: 1, target: 2, type: 1},
        {id: 2, source: 2, target: 3, type: 0}
      ]
    }

    onMounted(() => {
      loadData()
    })

    return {
      data,
      links,
      loadData
    }
  }
})