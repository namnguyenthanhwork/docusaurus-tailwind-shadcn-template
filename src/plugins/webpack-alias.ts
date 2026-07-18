import path from 'node:path'

import type { Plugin } from '@docusaurus/types'

type WebpackConfig = {
  resolve?: {
    alias?: Record<string, string>
  }
}

export default function webpackAliasPlugin(): Plugin<void> {
  return {
    name: 'webpack-alias-plugin',
    configureWebpack() {
      const config: WebpackConfig = {
        resolve: {
          alias: {
            '@': path.resolve(__dirname, '../'),
            '@components': path.resolve(__dirname, '../components'),
            '@css': path.resolve(__dirname, '../css'),
            '@hooks': path.resolve(__dirname, '../hooks'),
            '@lib': path.resolve(__dirname, '../lib'),
            '@pages': path.resolve(__dirname, '../pages'),
            '@plugins': path.resolve(__dirname, '../plugins'),
            '@store': path.resolve(__dirname, '../store'),
            '@theme': path.resolve(__dirname, '../theme'),
            '@types': path.resolve(__dirname, '../types'),
            '@constants': path.resolve(__dirname, '../constants'),
            '@utils': path.resolve(__dirname, '../utils')
          }
        }
      }

      return config
    }
  }
}
