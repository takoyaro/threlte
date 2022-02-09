import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-auto'
import { threeMinifier } from '@yushijinhun/three-minifier-rollup'
import { resolve } from 'path'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  preprocess: [
    preprocess({
      postcss: true
    }),
    mdsvex(mdsvexConfig)
  ],

  kit: {
    adapter: adapter(),

    target: '#svelte',

    package: {
      emitTypes: true,
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      exports: (file) => file === 'index.ts'
    },

    vite: {
      plugins: [{ ...threeMinifier(), enforce: 'pre' }],
      resolve: {
        alias: {
          threlte: resolve('src/lib'),
          $components: resolve('src/components'),
          $examples: resolve('src/examples'),
          $misc: resolve('src/misc'),
          $pages: resolve('src/pages')
        }
      },
      ssr: {
        noExternal: ['three']
      }
    }
  }
}

export default config
