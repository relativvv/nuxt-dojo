// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' },
        { charset: 'utf-8' },
      ],
      link: [{
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }]
    }
  }
})
