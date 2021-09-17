import {ComponentPublicInstance} from '@vue/runtime-core';

export function onError(err: any, instance: ComponentPublicInstance | null, info: string) {
  let message;
  switch (err.status) {
    case 401:
      if (err.data.error === "BadCredentialsException") {
        message = instance?.$t('message.error.badCredentials');
      } else {
        message = instance?.$t('message.error.unauthorized');
      }
      break;
    case 403:
      message = instance?.$t('message.error.forbidden');
      break;
    case 404:
      message = instance?.$t('message.error.notFound')
      break;
    case 500:
      message = instance?.$t('message.error.serverError');
      break;
    default:
      message = err.data.message;
      break;
  }
  instance?.$message.error(message);
}

export function onWarn(msg: string, instance: ComponentPublicInstance | null, trace: string) {
  console.warn(msg, trace);
}