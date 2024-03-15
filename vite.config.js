import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sass from 'sass';
// https://vitejs.dev/config/
export default defineConfig({
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
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
  },
});
