import type { StarlightPlugin } from '@astrojs/starlight/types'

import type { StarlightThemeBlackUserConfig } from './libs/config'
import { StarlightThemeBlackConfigSchema } from './libs/config'
import { overrideComponents } from './libs/starlight'
import { vitePluginStarlightThemeBlack } from './libs/vite'

export default function starlightThemeBlack(userConfig: StarlightThemeBlackUserConfig): StarlightPlugin {
  const parsedConfig = StarlightThemeBlackConfigSchema.safeParse(userConfig)

  if (!parsedConfig.success) {
    throw new Error(`The provided plugin configuration is invalid.\n${parsedConfig.error.issues.map(issue => issue.message).join('\n')}`)
  }

  const config = parsedConfig.data

  return {
    name: 'starlight-theme-destyler-plugin',
    hooks: {
      'config:setup': function ({ config: starlightConfig, logger, updateConfig, addIntegration }) {
        updateConfig({
          components: overrideComponents(
            starlightConfig,
            [
              'ThemeSelect',
              'PageFrame',
              'Header',
              'SiteTitle',
              'Sidebar',
              'TwoColumnContent',
              'ContentPanel',
              'PageTitle',
              'MarkdownContent',
              'Hero',
              'Footer',
              'SocialIcons',
              'Pagination',
              'Search',
              'TableOfContents',
              'PageSidebar',
            ],
            logger,
          ),
          customCss: [
            ...(starlightConfig.customCss ?? []),
            '@fontsource/geist-mono/100.css',
            '@fontsource/geist-mono/200.css',
            '@fontsource/geist-mono/300.css',
            '@fontsource/geist-mono/400.css',
            '@fontsource/geist-mono/500.css',
            '@fontsource/geist-mono/600.css',
            '@fontsource/geist-mono/700.css',
            '@fontsource/geist-mono/800.css',
            '@fontsource/geist-mono/900.css',
            '@fontsource/geist-sans/100.css',
            '@fontsource/geist-sans/200.css',
            '@fontsource/geist-sans/300.css',
            '@fontsource/geist-sans/400.css',
            '@fontsource/geist-sans/500.css',
            '@fontsource/geist-sans/600.css',
            '@fontsource/geist-sans/700.css',
            '@fontsource/geist-sans/800.css',
            '@fontsource/geist-sans/900.css',
            'starlight-theme-destyler/styles',
          ],
          expressiveCode:
            starlightConfig.expressiveCode === false
              ? false
              : {
                  themes: ['vitesse-dark', 'vitesse-light'],
                  ...(typeof starlightConfig.expressiveCode === 'object' ? starlightConfig.expressiveCode : {}),
                },
        })

        addIntegration({
          name: 'starlight-theme-destyler-integration',
          hooks: {
            'astro:config:setup': ({ updateConfig }) => {
              updateConfig({ vite: { plugins: [vitePluginStarlightThemeBlack(config)] } })
            },
          },
        })
      },
    },
  }
}
