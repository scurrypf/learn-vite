import { defineConfig } from 'vite'
// require vue@3.x
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})