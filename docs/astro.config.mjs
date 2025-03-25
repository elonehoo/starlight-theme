// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import destylerTheme from 'starlight-theme-destyler'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
    },
    syntaxHighlight: 'shiki',
  },
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
          footer: {
            social: [
              {
                url: 'https://discord.gg/SwgESrV7HY',
                icon: 'i-carbon:logo-discord',
              },
              {
                url: 'https://x.com/elonehoo',
                icon: 'i-carbon:logo-x',
              },
              {
                url: 'https://gitub.com/destyler',
                icon: 'i-carbon:logo-github',
              },
            ],
            items: [
              {
                text: 'Figma Kit',
                url: '',
              },
              {
                text: 'Playground',
                url: 'https://play.destyler.org',
              },
              {
                text: 'Roadmap',
                url: 'https://github.com/destyler/destyler/pulls?q=sort:updated-desc+is:pr+is:open',
              },
              {
                text: 'Releases',
                url: 'https://github.com/destyler/destyler/releases',
              },
            ],
          },
        }),
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { slug: 'getting-started' },
            { slug: 'markdown', badge: 'New' },
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
