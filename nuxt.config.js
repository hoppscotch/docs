import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#4ade80",
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
  
  i18n: {
    locales: () => [{
      code: 'es',
      iso: 'es-ES',
      file: 'es-ES.js',
      name: 'Español'
    }, {
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }, {
      code: 'ja',
      iso: 'ja-JP',
      file: 'ja-JP.js',
      name: '日本語'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    },{
      code: "cn",
      name: "简体中文",
      iso: "zh-CN",
      file: "zh-CN.js",
    }
],
    defaultLocale: 'en'
  },
});
