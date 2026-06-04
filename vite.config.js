import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('.', import.meta.url));
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                about: resolve(root, 'about.html'),
                fiction: resolve(root, 'fiction.html'),
                advertisements: resolve(root, 'advertisements.html'),
                blogs: resolve(root, 'blogs.html'),
                contact: resolve(root, 'contact.html'),
                ads: resolve(root, 'ads.html'),
                advertisement: resolve(root, 'advertisement.html'),
            },
        },
    },
});
