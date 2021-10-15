import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#3b82f6",
  },
  i18n: {
    locales: () => [
      {
        code: "fr",
        iso: "fr-FR",
        file: "fr-FR.js",
        name: "Français",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "en",
  },
  pwa: {
    manifest: {
      name: "Hoppscotch Documentation",
    },
  },
  buildModules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss",
  ],
});
