import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 5001,
		// https:true,
	},

	resolve: {
		alias: {
			src: '/src',
			public: '/public',
			// '~': '/src',
			// '@': '/src',
		},
	},
});
