import {
  presetAttributify,
  presetIcons,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetAnimations } from 'unocss-preset-animations'

export function presetDestyler() {
  return {
    name: 'unocss-preset-destyler',
    shortcuts: [
      {
        icones: 'w-5 h-5',
      },
      ['btn', 'focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-primary-foreground! bg-primary! hover:bg-primary/90! focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-500 group-data-[theme=dark]:focus-visible:outline-light-400 inline-flex items-center'],
      ['head-btn', 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-[var(--header-primary)] hover:text-[var(--header-primary)] hover:bg-[var(--header-accent-foreground)] focus-visible:ring-inset focus-visible:ring-2 inline-flex items-center bg-transparent'],
    ],
    rules: [
      [/^scrollbar-hide$/, () => {
        return `
        .scrollbar-hide{ scrollbar-width:none }
        .scrollbar-hide::-webkit-scrollbar{ display:none }`
      }],
      [/^scrollbar-default$/, () => {
        return `
        .scrollbar-default{ scrollbar-width:auto }
        .scrollbar-default::-webkit-scrollbar{ display:block }`
      }],
      [
        'animate-collapse-down',
        {
          animation: 'collapse-down 0.2s ease-out',
        },
      ],
      [
        'animate-collapse-up',
        {
          animation: 'collapse-up 0.2s ease-out',
        },
      ],
      [
        'animate-collapsible-down',
        {
          animation: 'collapsible-down 0.2s ease-out',
        },
      ],
      [
        'animate-collapsible-up',
        {
          animation: 'collapsible-up 0.2s ease-out',
        },
      ],
    ],
    theme: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
    presets: [
      presetWind3(),
      presetAttributify(),
      presetAnimations(),
      presetIcons({
        warn: true,
        extraProperties: {
          'width': '1.23rem',
          'height': '1.23rem',
          'display': 'inline-block',
          'vertical-align': 'text-bottom',
        },
      }),
    ],
    transformers: [
      transformerVariantGroup(),
      transformerDirectives(),
    ],
  }
}

export default presetDestyler
