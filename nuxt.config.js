// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "nuxt-svgo",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@formkit/nuxt",
  ],
  content: {
    documentDriven: true,
  },
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: "",
  },

  runtimeConfig: {
    // private, only available server-side

    // public, exposed client-side
    public: {
      // base values
      finelineSubmitUrl: "",
    },
  },
});
