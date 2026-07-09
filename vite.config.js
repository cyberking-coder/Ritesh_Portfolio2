import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project site: https://<user>.github.io/ritesh_portfolio2/
// If you deploy to a custom domain or user/root site, change this to '/'.
export default defineConfig({
  // Relative base = works on any GitHub Pages path regardless of case
  // (repo is "Ritesh_Portfolio2"), custom domains, and local preview.
  base: process.env.GITHUB_PAGES ? './' : '/',
  plugins: [react()],
})
