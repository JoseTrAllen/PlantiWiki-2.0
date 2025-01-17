import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Esto redirige '/api' a la API local
    },
  },
  build: {
    outDir: "dist", // Asegúrate de que el directorio de salida sea correcto
    rollupOptions: {
      output: {
        format: "es", // Asegúrate de que se esté utilizando un formato de módulo adecuado
      },
    },
  },
});
