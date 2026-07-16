import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// IMPORTANT: change `base` to match your GitHub Pages repo name.
// If deploying to https://<username>.github.io/<repo-name>/  -> base: '/<repo-name>/'
// If deploying to https://<username>.github.io/ (user/org page) -> base: '/'
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
