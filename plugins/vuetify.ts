import "@/assets/variables.scss";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
    },
    defaults: defaults,
    //@ts-ignore
    styles: { configFile: "assets/variables.scss" },
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
        mainDarkTheme,
      },
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 4,
        darken: 4,
      },
    },
    icons: {
      defaultSet: 'custom',
      aliases,
      sets: {
        custom,
      },
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
