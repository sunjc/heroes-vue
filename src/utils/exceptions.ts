import {ComponentPublicInstance} from '@vue/runtime-core'
import {useI18n} from 'vue-i18n'

export function onError(err: any, instance: ComponentPublicInstance | null, info: string) {
  const {t} = useI18n()
  let message
  switch (err.status) {
    case 401:
      if (err.data.error === 'BadCredentialsException') {
        message = t('message.error.badCredentials')
      } else {
        message = t('message.error.unauthorized')
      }
      break
    case 403:
      message = t('message.error.forbidden')
      break
    case 404:
      message = t('message.error.notFound')
      break
    case 500:
      message = t('message.error.serverError')
      break
    default:
      message = err.data.message
      break
  }
  instance?.$message.error(message)
}

export function onWarn(msg: string, instance: ComponentPublicInstance | null, trace: string) {
  console.warn(msg, trace)
}