import enLocale from 'element-plus/lib/locale/lang/en';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';
import {enMessage} from '@/locale/en-us';
import {zhMessage} from '@/locale/zh-cn';

export const messages = {
  [enLocale.name]: {
    el: enLocale.el,
    message: enMessage
  },
  [zhLocale.name]: {
    el: zhLocale.el,
    message: zhMessage
  }
}

export const datetimeFormats = {
  [enLocale.name]: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  [zhLocale.name]: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  }
}