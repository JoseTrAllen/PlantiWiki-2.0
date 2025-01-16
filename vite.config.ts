import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Esto redirige '/api' a la API local
    },
  },
});
