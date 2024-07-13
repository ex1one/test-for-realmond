import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	root: '.',
	build: {
		outDir: 'dist',
	},
	server: {
		port: 3000,
	},
	plugins: [tsconfigPaths()],
})
