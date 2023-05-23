export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  modules: ["@nuxthq/studio", "@nuxtjs/tailwindcss"],
  plugins: [{ src: "~/plugins/medium-zoom", mode: "client" }],
  runtimeConfig: {
    public: {
      algolia: {
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        applicationId: process.env.ALGOLIA_APPLICATION_ID,
        langAttribute: "lang",
        docSearch: {
          indexName: process.env.ALGOLIA_INDEX_NAME,
        },
      },
    },
  },
})
