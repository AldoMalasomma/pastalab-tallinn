import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL ?? "http://localhost:4321";

export default defineConfig({
  output: "server",
  site,
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en", "et", "ru"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
