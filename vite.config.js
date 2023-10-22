import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://nick-brick.github.io/store-react/",
  plugins: [react()],
})
