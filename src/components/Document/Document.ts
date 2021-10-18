import {computed, defineComponent} from 'vue'
// @ts-ignore
import CKEditor from '@ckeditor/ckeditor5-vue'
// @ts-ignore
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn.js'

export default defineComponent({
  name: 'Document',

  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },

  emits: ['update:modelValue'],

  components: {
    ckeditor: CKEditor.component
  },

  setup(props: any, {emit}) {
    const editor = DecoupledEditor
    const editorConfig = {
      language: 'zh-cn'
    }

    function onReady(editor: CKEditor) {
      // Insert the toolbar before the editable area.
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      )
    }

    const value = computed({
      get() {
        return props.modelValue
      },

      set(value) {
        emit('update:modelValue', value)
      }
    })

    return {
      value,
      editor,
      editorConfig,
      onReady
    }
  }

})