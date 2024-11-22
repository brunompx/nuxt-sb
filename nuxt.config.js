// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [['@storyblok/nuxt', { accessToken: '8HK1rMrEZfQlQf3EfrSK1gtt' }],
  '@nuxtjs/tailwindcss',
  ]
})