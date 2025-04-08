import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),          // Keep this if you're using React
    tailwindcss(),    // Add Tailwind plugin
  ],
})
