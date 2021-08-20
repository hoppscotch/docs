/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: "0 !important",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
