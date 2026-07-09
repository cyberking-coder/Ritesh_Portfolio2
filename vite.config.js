import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project site: https://<user>.github.io/ritesh_portfolio2/
// If you deploy to a custom domain or user/root site, change this to '/'.
export default defineConfig({
  // Absolute base matching the GitHub Pages project path (case-sensitive!).
  // This makes asset URLs resolve from the site root regardless of the
  // current page path or the 404 SPA fallback. Repo is "Ritesh_Portfolio2".
  base: process.env.GITHUB_PAGES ? '/Ritesh_Portfolio2/' : '/',
  plugins: [react()],
})
