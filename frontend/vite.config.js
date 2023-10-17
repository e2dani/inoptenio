import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/atom': 'http://localhost:4000',
      '/atoms': 'http://localhost:4000',
      '/addatom': 'http://localhost:4000',
      
      '/delatom': 'http://localhost:4000',
      '/actatom': 'http://localhost:4000'
    }
  },
  plugins: [react()],
})








