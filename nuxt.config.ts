import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@roshan-labs/http-module'],
  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
      },
    },
  },
})
