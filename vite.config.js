//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
//import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
//export default defineConfig({
//plugins: [react(), tailwindcss()],
//})import { defineConfig } from 'vite'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [react()],
    server: {
        historyApiFallback: true, // for routing issue
    },
});