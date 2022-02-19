import type {ConfigEnv, UserConfig} from 'vite'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import path from "path"

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
// eslint-disable-next-line no-unused-vars
export default defineConfig(({command, mode}: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const {VITE_BASE_URL, VITE_API_URL} = env

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '~/': `${pathSrc}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '~/styles/element.scss' as *;`,
        },
      },
    },
    plugins: [
      vue(),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
    ],
    server: {
      proxy: {
        '/api': {
          target: VITE_API_URL,
          changeOrigin: true,
        }
      }
    }
  }
})

