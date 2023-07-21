// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind(),
  ],
  theme: {
    colors: {
      'main-200': '#6ea9f1',
      'main-500': '#4895f3',
      'main-800': '#3087f2',
    }
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
