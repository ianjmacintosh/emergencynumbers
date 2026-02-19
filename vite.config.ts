import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  plugins: [react(), cloudflare()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about/index.html",
      },
    },
  },
});
