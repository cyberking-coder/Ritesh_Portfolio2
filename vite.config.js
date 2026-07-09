import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project site: https://<user>.github.io/ritesh_portfolio2/
// If you deploy to a custom domain or user/root site, change this to '/'.
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/ritesh_portfolio2/' : '/',
  plugins: [react()],
})
