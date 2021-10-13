import {h, resolveComponent} from 'vue';

export function rowClass(row: Object, index: number) {
  if (index % 2 == 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

export function renderLink(path: string, text: string) {
  // @ts-ignore
  return h(resolveComponent('router-link'), {to: path}, {default: () => text})
}

export const windowWidth = window.innerWidth

export const windowHeight = window.innerHeight