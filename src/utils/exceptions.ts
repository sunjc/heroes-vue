import {ComponentPublicInstance} from '@vue/runtime-core'

export function onError(err: any, vm: ComponentPublicInstance | null, info: string) {
  let message
  switch (err.status) {
    case 401:
      message = vm?.$t('message.error.unauthorized')
      break
    case 403:
      message = vm?.$t('message.error.forbidden')
      break
    case 404:
      message = vm?.$t('message.error.notFound')
      break
    case 500:
      message = vm?.$t('message.error.serverError')
      break
    default:
      if (err.data) {
        message = err.data.message
      } else {
        message = err.message
      }
      break
  }
  // @ts-ignore
  window.$message.error(message)
}

export function onWarn(msg: string, vm: ComponentPublicInstance | null, trace: string) {
  console.warn(msg, trace)
}