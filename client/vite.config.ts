import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'

// https://vitejs.dev/config/

export default defineConfig({
  build : {
    outDir: '../docs',
    emptyOutDir: true
  },
  plugins: [million.vite({ auto: true }), react()],
  
})
