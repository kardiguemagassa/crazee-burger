import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ajouter le "resolve" ci-dessous que si tu utilises un projet vite.js. En CRA, pas besoin.
  // sans ça, il n'arrive pas à importer les fichier simples comme @theme/theme
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
