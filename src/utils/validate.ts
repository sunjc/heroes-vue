import {FormItemRule} from 'naive-ui'

export function isPhoneNumber(rule: FormItemRule, value: any) {
  const regex = /^\d{11}$/
  return regex.test(value)
}

export function isEmail(rule: FormItemRule, value: any) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(value)
}