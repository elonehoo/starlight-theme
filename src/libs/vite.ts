import type { ViteUserConfig } from 'astro'
import type { StarlightThemeDestylerConfig } from './config'

export function vitePluginStarlightThemeDestyler(config: StarlightThemeDestylerConfig): VitePlugin {
  const moduleId = 'virtual:starlight-theme-destyler-config'
  const resolvedModuleId = `\0${moduleId}`
  const moduleContent = `export default ${JSON.stringify(config)}`

  return {
    name: 'vite-plugin-starlight-theme-destyler',
    load(id) {
      return id === resolvedModuleId ? moduleContent : undefined
    },
    resolveId(id) {
      return id === moduleId ? resolvedModuleId : undefined
    },
  }
}

type VitePlugin = NonNullable<ViteUserConfig['plugins']>[number]
