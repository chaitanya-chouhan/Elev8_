import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Serve the root directory so all existing static assets
  // (images, CSS, sub-page HTMLs) remain accessible at their original paths
  root: '.',
  publicDir: 'public',
  test: {
    // Use jsdom to simulate a browser environment for React component tests
    environment: 'jsdom',
    // Auto-import jest-dom matchers (toBeInTheDocument, etc.)
    setupFiles: ['./tests/setup.js'],
    // Include all test files under tests/frontend
    include: ['tests/frontend/**/*.test.{js,jsx}'],
    globals: true,
  },
})

