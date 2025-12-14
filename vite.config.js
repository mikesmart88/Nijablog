import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VITE_PORT } from './env.config'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server:{
      port: VITE_PORT
    }
  }
})