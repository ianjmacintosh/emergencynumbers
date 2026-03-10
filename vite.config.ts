import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  environments: {
    client: {
      build: {
        rollupOptions: {
          input: {
            main: "index.html",
            about: "about/index.html",
            notFound: "404.html",
          },
        },
      },
    },
  },
});
