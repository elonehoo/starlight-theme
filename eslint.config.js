// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  astro: true,
  ignores: [
    './src/overrides/Search.astro',
  ],
  rules: {
    'regexp/no-unused-capturing-group': 'off',
  },
})
