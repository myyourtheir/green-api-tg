import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "path";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/app/routes",
    }),
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ["4100.api.green-api.com"],
    proxy: {
      "/api": {
        changeOrigin: true,
        target: "https://4100.api.green-api.com",
        rewrite: (path) => {
          const newPath = path.replace(/^\/api/, "");
          console.log({ newPath, path });
          return newPath;
        },
      },
    },
  },
});
