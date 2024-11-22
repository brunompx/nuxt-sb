import { apiPlugin } from '@storyblok/vue'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        use: [apiPlugin]
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})


