import {h} from 'vue'
import {RouterLink} from 'vue-router'

export function rowClass(row: Object, index: number) {
  if (index % 2 == 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

export function renderRouterLink(path: string, text: string) {
  return h(RouterLink, {to: {path: path}}, {default: () => text})
}