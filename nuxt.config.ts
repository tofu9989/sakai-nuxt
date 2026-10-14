import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({

  app: {
    head: {
      meta: [
        { 'http-equiv': 'x-ua-compatible', 'content': 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  },

  build: {
    transpile: [
      'chart.js',
      'primevue'
    ]
  },

  components: {
    dirs: [
      {
        extensions: ['vue'],
        global: true,
        path: '~/components/common/',
        pathPrefix: false
      }
    ]
  },

  css: [
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    'prismjs/themes/prism-coy.css',
    '~/assets/styles/layout.scss',
    '~/assets/demo/flags/flags.css'
  ],

  experimental: {
    typedPages: true
  },

  // @ts-ignore
  googleFonts: {
    families: {
      Inter: true
    }
  },

  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/google-fonts',
    '~/modules/primevue'
  ],

  nitro: {
    experimental: {
      asyncContext: true
    }
  },

  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },

  srcDir: 'src/',

  vite: {
    build: {
      sourcemap: false
    },
    clearScreen: true,
    logLevel: 'info',
    vue: {
      template: {
        transformAssetUrls: {
          // Nuxt's public/ assets are referenced as absolute `/images/...` URLs.
          // @vitejs/plugin-vue >=6 defaults includeAbsolute to true, which rewrites
          // those into module imports resolved against srcDir. Keep them as URLs.
          includeAbsolute: false
        }
      }
    }
  },

  pwa: {
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
});
