import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import envCompatible from 'vite-plugin-env-compatible';
import legacy from '@vitejs/plugin-legacy';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build',
		minify: 'esbuild',
		target: 'esnext',
	},
	css: {
		preprocessorOptions: {
			sass: {
				implementation: sass,
			},
		},
	},
	define: {
		'process.env': process.env,
	},
	envPrefix: 'REACT_APP_',
	optimizeDeps: {
		esbuildOptions: {
			supported: {
				'top-level-await': true,
			},
			define: {
				global: 'globalThis',
			},
		},
	},
	plugins: [
		react(),
		envCompatible(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx', 'json'],
	},
	server: {
		port: process.env.PORT || 3000,
		host: true,
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/setupTests.js',
	},
});
