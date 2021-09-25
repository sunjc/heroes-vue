import type {ConfigEnv, UserConfig} from 'vite';
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// eslint-disable-next-line no-unused-vars
export default defineConfig(({command, mode}: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const {VITE_PORT, VITE_BASE_URL, VITE_API_URL} = env

  return {
    base: VITE_BASE_URL,
    plugins: [
      vue(),
    ],
    server: {
      port: Number(VITE_PORT),
      proxy: {
        '/api': {
          target: VITE_API_URL,
          changeOrigin: true,
        }
      }
    }
  }
})
