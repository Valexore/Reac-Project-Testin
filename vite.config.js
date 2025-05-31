import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: process.env.VITE_BASE_PATH || "/Reac-Project-Testin/", // Set the base path for your application

})
