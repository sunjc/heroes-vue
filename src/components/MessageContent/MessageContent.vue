<template>
  <div style="display: none"></div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {useMessage} from 'naive-ui'

export default defineComponent({
  name: 'MessageContent',

  setup() {
    window['$message'] = useMessage()
  }
})
</script>