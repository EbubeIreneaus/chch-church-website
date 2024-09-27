// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import { aliases, fa } from "vuetify/iconsets/fa";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    icons: {
      defaultSet: "fa",
      aliases,
      sets: {
        fa,
      },
    },
  });
  app.vueApp.use(vuetify);
});
