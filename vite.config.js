import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correct base for your GitHub Pages URL
export default defineConfig({
  plugins: [react()],
  base: '/vCard-Website-React/',   // <-- match this exactly to your repo name (with capital C and W)
})
