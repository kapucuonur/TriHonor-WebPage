// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Make sure to import path

// https://vitejs.dev/config/
export default defineConfig({
  // Explicitly set the root directory of the client application.
  // This tells Vite where to find the index.html file.
  root: path.resolve(__dirname, '.'), // '.' means the current directory

  // Define the source directory relative to the root.
  // This is usually the default, but being explicit helps.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  plugins: [react()],
})