import {defineConfig} from "vite";
import htmlInclude from "vite-plugin-html-include";

export default defineConfig({
    root: 'src',
    publicDir: 'public',

    server: {
        port: 3000,
        host: true,
        open: true,
    },

    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourceMap: true,
    },
    plugins: [htmlInclude()]
})