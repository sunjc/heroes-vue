import {enMessage} from './en-us'
import {zhMessage} from './zh-cn'
import {enUS, zhCN} from 'naive-ui'

export const messages = {
  [enUS.name]: {
    el: enUS.name,
    message: enMessage
  },
  [zhCN.name]: {
    el: zhCN.name,
    message: zhMessage
  }
}

export const datetimeFormats = {
  [enUS.name]: {
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
  [zhCN.name]: {
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