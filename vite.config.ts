import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    cloudflare({
      configPath:
        mode === "development" ? "./wrangler.dev.jsonc" : "./wrangler.jsonc",
    }),
  ],
  environments: {
    client: {
      build: {
        rollupOptions: {
          input: {
            main: "index.html",
            about: "about/index.html",
            terms: "terms/index.html",
            credits: "credits/index.html",
            notFound: "404.html",
          },
        },
      },
    },
  },
}));
