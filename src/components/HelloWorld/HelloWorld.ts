import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HelloWorld',

  props: {
    msg: {
      type: String,
      required: true
    }
  }
})