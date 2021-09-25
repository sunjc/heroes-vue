/// <reference types="vite/client" />

declare module '*.vue' {
  import {DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// eslint-disable-next-line no-unused-vars
interface ImportMetaEnv {
  VITE_APP_TITLE: string
  VITE_PORT: string
  VITE_BASE_URL: string
  VITE_API_URL: string
}