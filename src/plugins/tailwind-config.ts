import { createRequire } from 'node:module'

import type { LoadContext, Plugin } from '@docusaurus/types'

type PostCssOptions = {
  plugins: unknown[]
}

const require = createRequire(import.meta.url)

export default function tailwindPlugin(_context: LoadContext, _options: unknown): Plugin<void> {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions: PostCssOptions) {
      const tailwindPostcss = require('@tailwindcss/postcss') as unknown
      postcssOptions.plugins = [tailwindPostcss]
      return postcssOptions
    }
  }
}
