import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({fix: true, emitErrorAsWarning: true})],
  server: {
    port: 2020,
  },
})
