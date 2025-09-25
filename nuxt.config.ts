// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig( {
  compatibilityDate : "2025-07-15",
  devtools          : { enabled: true },
  runtimeConfig     : {
    public: {
      siteName : process.env.NUXT_SITE_NAME,
      siteUrl  : process.env.NUXT_SITE_URL,
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  eslint: {
    checker: true,
  },
  tailwindcss: {
    exposeConfig: true,
  },
  css     : ["@/assets/css/main.css"],
  postcss : {
    plugins: {
      "postcss-import"      : {},
      "tailwindcss/nesting" : {},
      tailwindcss           : {},
      autoprefixer          : {},
    },
  },
  site: {
    url       : process.env.NUXT_SITE_URL,
    name      : process.env.NUXT_SITE_NAME,
    indexable : process.env.NODE_ENV === "production",
  },
} )
