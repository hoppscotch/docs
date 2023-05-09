export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
   modules: [
    '@nuxthq/studio'
  ],
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
