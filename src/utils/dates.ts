import {format} from 'date-fns'

const DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm'
const DATE_FORMAT = 'yyyy-MM-dd'
const MONTH_FORMAT = 'yyyy年MM月'

export function formatDatetime(date: Date | number, datetimeFormat = DATE_TIME_FORMAT): string {
  return format(date, datetimeFormat)
}

export function formatDate(date: Date | number, dateFormat = DATE_FORMAT): string {
  return format(date, dateFormat)
}

export function formatMonth(date: Date | number, dateFormat = MONTH_FORMAT): string {
  return format(date, dateFormat)
}

export function currentDate(): string {
  return formatDate(new Date())
}

export function currentMonth(): string {
  return formatMonth(new Date())
}
