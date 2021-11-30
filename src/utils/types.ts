/**
 * @description:  是否为undefined
 */
export function isUndefined(val: unknown): boolean {
  return typeof val === 'undefined'
}

/**
 * @description:  是否为null
 */
export function isNull(val: unknown): boolean {
  return val === null
}

/**
 * @description:  是否为null或undefined
 */
export function isNullOrUndefined(val: unknown): boolean {
  return isNull(val) || isUndefined(val)
}

/**
 * @description:  是否为boolean类型
 */
export function isBoolean(val: unknown): boolean {
  return typeof val === 'boolean'
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): boolean {
  return typeof val === 'number'
}

/**
 * @description:  是否为数值
 */
export function isBigInt(val: unknown): boolean {
  return typeof val === 'bigint'
}

/**
 * @description:  是否为字符串
 */
export function isString(val: unknown): boolean {
  return typeof val === 'string'
}

/**
 * @description:  是否为Symbol
 */
export function isSymbol(val: unknown): boolean {
  return typeof val === 'symbol'
}

/**
 * @description:  是否为函数
 */
export function isFunction(val: unknown): boolean {
  return typeof val === 'function'
}

/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction(val: unknown): boolean {
  return isType(val, 'AsyncFunction')
}

/**
 * @description: 判断值是否为某个类型
 */
export function isType(val: unknown, type: string) {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}

/**
 * @description: 返回对象的类型，同typeof一致返回值为小写字符
 */
export function typeOf(obj: unknown) {
  if (obj == null) {
    return (obj + '').toLowerCase()
  }

  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

/**
 * @description: 是否为对象
 */
export function isObject(val: any): boolean {
  return val instanceof Object
}

/**
 * @description:  是否为时间
 */
export function isDate(val: unknown): val is Date {
  return val instanceof Date
}

/**
 * @description:  是否为数组
 */
export function isArray(val: any): boolean {
  return Array.isArray(val)
}

/**
 * @description: 是否客户端
 */
export const isClient = () => {
  return typeof window !== 'undefined'
}

export const isElement = (val: any): boolean => {
  return isObject(val) && val.tagName
}
