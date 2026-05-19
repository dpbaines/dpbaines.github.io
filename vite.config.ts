import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/guide/static-deploy.html#github-pages
export default defineConfig({
  base: '/',
  plugins: [react()],
})
