// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from "@tailwindcss/vite"
// import path from "path"

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//   resolve:{
//     alias:{
//       "@" : path.resolve(__dirname, "./src"),
//     }
//   }
// }); 


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { fileURLToPath } from 'url'

// Manually define __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //  base: import.meta.env.VITE_BASE_PATH || "/ChandanaPortfolio",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})

