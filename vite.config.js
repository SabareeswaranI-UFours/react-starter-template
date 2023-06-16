import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "./src/components",
      "@contexts": "./src/contexts",
      "@hooks": "./src/hooks",
      "@reducers": "./src/reducers",
      "@actions": "./src/actions",
      "@utils": "./src/utils",
    }
  }
})