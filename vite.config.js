import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
  // base: '/', // Make sure this matches your repo name
  base: '/my-portfolio/', // Make sure this matches your repo name
  // server: {
  //   host: true,
  //   https: {
  //     key: fs.readFileSync('./localhost+1-key.pem'),
  //     cert: fs.readFileSync('./localhost+1.pem')
  //   }
  // }
})
