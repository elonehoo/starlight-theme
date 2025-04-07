import type { Plugin } from 'vite'

export default function injectComponents(componentsMap: Record<string, string> = {}): Plugin {
  return {
    name: 'vite-plugin-resolve-user-components',
    resolveId(id) {
      if (id.startsWith('virtual:user-component:'))
        return id
    },
    load(id) {
      if (id.startsWith('virtual:user-component:')) {
        const key = id.split(':')[2]
        const path = componentsMap[key]
        if (!path)
          return null

        return `export { default } from '${path}';`
      }
    },
  }
}
