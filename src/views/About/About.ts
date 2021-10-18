import {defineComponent} from 'vue'
import Document from '../../components/Document/Document.vue'

export default defineComponent({
  name: 'About',

  components: {
    Document
  },

  setup() {
    const editorData = '<figure class="image image_resized" style="width:200px;"><img src="https://v3.vuejs.org/logo.png"></figure>' +
        '<h1>Welcome to VUE 3 + Naive UI + TypeScript App</h1>' +
        '<p><a href="https://blog.51cto.com/itrunner"><span style="color:hsl(0, 75%, 60%);">i</span>TRunner - 奔跑的猿</a></p>' +
        '<p>For a guide and recipes on how to configure / customize this project, check out the ' +
        '<a href="https://vitejs.dev/">Vite Documentation</a>.</p>' +
        '<h3>Installed Plugins</h3>' +
        '<figure class="table"><table><tbody><tr>' +
        '<td><a href="https://axios-http.com/">Axios</a></td>' +
        '<td><a href="https://eslint.org/">ESLint</a></td>' +
        '<td><a href="https://www.naiveui.com/">Naive UI</a></td>' +
        '<td><a href="https://vue-i18n.intlify.dev/">Vue I18n</a></td>' +
        '<td><a href="https://next.router.vuejs.org/">Vue Router</a></td>' +
        '<td><a href="https://next.vue-test-utils.vuejs.org/">Vue Test Utils</a></td>' +
        '<td><a href="https://jestjs.io/">JEST</a></td>' +
        '<td><a href="https://babeljs.io/">Babel</a></td>' +
        '<td><a href="https://docs.cypress.io/">Cypress</a></td>' +
        '</tr></tbody></table></figure>' +
        '<h3>Ecosystem</h3>' +
        '<figure class="table"><table><tbody><tr>' +
        '<td><a href="https://v3.vuejs.org/">Vue 3.0</a></td>' +
        '<td><a href="https://vuex.vuejs.org/">Vuex</a></td>' +
        '<td><a href="https://github.com/vuejs/devtools">vue-devtools</a></td>' +
        '<td><a href="https://2x.antdv.com/">Ant Design Vue</a></td>' +
        '<td><a href="https://awesome-vue.js.org/">Awesome Vue</a></td>' +
        '<td><a href="https://element-plus.org/">Element Plus</a></td>' +
        '</tr></tbody></table></figure>' +
        '<p><a href="https://ckeditor.com/">CKEditor 5</a> </p>'

    return {
      editorData
    }
  }
})