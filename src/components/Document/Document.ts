import {defineComponent} from 'vue'
// @ts-ignore
import CKEditor from '@ckeditor/ckeditor5-vue'
// @ts-ignore
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn.js'

export default defineComponent({
  name: 'Document',

  props: {
    editorData: {
      type: String,
      required: true
    }
  },

  components: {
    ckeditor: CKEditor.component
  },

  setup() {
    const editor = DecoupledEditor
    const editorConfig = {
      language: 'zh-cn'
    }

    function onReady(editor: any) {
      // Insert the toolbar before the editable area.
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      )
    }

    return {
      editor,
      editorConfig,
      onReady
    }
  }

})