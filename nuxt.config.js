import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#3b82f6",
  },

  pwa: {
    manifest: {
      name: "Hoppscotch Documentation",
    },
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Customize the loading indicator (https://nuxtjs.org/api/configuration-loading-indicator)
  loadingIndicator: {
    name: "pulse",
    color: "#3b82f6",
    background: "#ffffff",
  },

  buildModules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss",
  ],
});
