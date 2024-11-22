// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [['@storyblok/nuxt'],
  '@nuxtjs/tailwindcss',
  ],
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN, // New .env variable
    use: [apiPlugin]
 },
})

 
