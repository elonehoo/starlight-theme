// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import destylerTheme from 'starlight-theme-destyler'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    starlight({
      logo: {
        dark: './src/assets/logo-dark.svg',
        light: './src/assets/logo-light.svg',
        alt: 'Starlight Black',
      },
      editLink: {
        baseUrl: 'https://github.com/adrian-ub/starlight-theme-destyler/edit/main/docs/',
      },
      plugins: [
        destylerTheme({
          navLinks: [
            {
              label: 'Docs',
              link: '/getting-started',
            },
            {
              label: 'Starlight',
              link: 'https://starlight.astro.build',
              badge: 'External',
              attrs: {
                target: '_blank',
                rel: 'noopener',
              },
            },
          ],
        }),
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { slug: 'getting-started' },
            { slug: 'test-toc', badge: 'New' },
          ],
        },
      ],
      social: {
        github: 'https://github.com/adrian-ub/starlight-theme-destyler',
      },
      title: '@destyler/theme',
    }),
  ],
})
