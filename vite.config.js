import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/developingPortfolio3D/",
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
})
