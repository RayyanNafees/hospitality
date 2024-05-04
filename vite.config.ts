import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import path from 'node:path'
// https://vitejs.dev/config/

export default defineConfig({
	plugins: [million.vite({ auto: true }), react()],
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
	},
});
